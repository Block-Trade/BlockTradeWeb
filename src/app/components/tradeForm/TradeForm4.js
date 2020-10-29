import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setDescOfConsign } from '../../actions/tradeDeal';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      alignItems:"center",
      '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }));

const TradeForm4 = ({history,setDescOfConsign,tradeDeal}) => {
    const classes = useStyles();
    const [pid, setPID] = useState("");
    const [fxRate,setFxRate] = useState("");
    const [description,setDescription] = useState("");
    const [sellPrice,setSellPrice] = useState("");
    const [tax,setTax] = useState(0);
    const [itemPrice,setItemPrice] = useState(0);
    const [unitsPk,setUnitsPk] = useState("");
    const [qty,setQty] = useState(0);
    const [amount,setAmount] = useState("");
    const [products,setProducts] = useState([]);
    const [totalAmount,setTotalAmount] = useState("");
    const [totalNetWt,setTotalNetWt] = useState("");
    const [currDisc,setCurrDisc]= useState("");
    const [totalCube,setTotalCube]= useState("");
    const [totalGross,setTotalGross] = useState("");
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();
    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
      });

    const handleButtonClick = (e) => {
    e.preventDefault();

    if (!loading) {
        nextForm();
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        }, 2000);
    }
    };
    useEffect(() => {
        const { descriptionOfConsignmentInfo } = tradeDeal;
        if(descriptionOfConsignmentInfo){
            setPID(descriptionOfConsignmentInfo.pid);
            setFxRate(descriptionOfConsignmentInfo.fxRate);
            setDescription(descriptionOfConsignmentInfo.description);
            setSellPrice(descriptionOfConsignmentInfo.sellPrice);
            setTax(descriptionOfConsignmentInfo.tax);
            setItemPrice(descriptionOfConsignmentInfo.itemPrice);
            setUnitsPk(descriptionOfConsignmentInfo.unitsPk);
            setQty(descriptionOfConsignmentInfo.qty);
            setAmount(descriptionOfConsignmentInfo.amount);
            setProducts(descriptionOfConsignmentInfo.products);
            setTotalAmount(descriptionOfConsignmentInfo.totalAmount);
            setTotalNetWt(descriptionOfConsignmentInfo.totalNetWt);
            setCurrDisc(descriptionOfConsignmentInfo.currDisc);
            setTotalCube(descriptionOfConsignmentInfo.totalCube);
            setTotalGross(descriptionOfConsignmentInfo.totalGross);
        }
    },[]);

    const product = {
        pid,
        fxRate,
        description,
        sellPrice,
        tax,
        itemPrice,
        unitsPk,
        qty,
        amount
    };

    const addProduct = (e) => {
        e.preventDefault();
        setProducts([...products, product]);
        setPID("");
        setAmount("");
        setQty(0);
        setDescription("");
        setUnitsPk("");
        setSellPrice("");
        setTax(0);
        setFxRate("");
        setItemPrice(0);
    }

    const nextForm = (e) => {
        e.preventDefault();
        setProducts([...products, product]);
        const descOfConsign = {
            products,
            totalAmount,
            totalCube,
            totalGross,
            totalNetWt,
            currDisc
        }
        console.log(descOfConsign);
        setDescOfConsign(descOfConsign);
        //history.push('/tradeform5');
    }
    return (
        <div className={classes.root}>
        <div style={{ marginLeft: 'auto',marginRight:'auto' }}>
            <h3 style={{alignItems:"center"}}>Product Details</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="pid"
                    label="Product ID"
                    type="text"
                    variant="outlined"
                    value={pid} onChange={(e) => setPID(e.target.value)}
                />
                <TextField
                    id="fxRate"
                    label="Fix Rate"
                    type="text"
                    variant="outlined"
                    value={fxRate} onChange={(e) => setFxRate(e.target.value)}
                />
                <TextField
                    id="description"
                    label="Description(Package)"
                    type="text"
                    variant="outlined"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    multiline
                    rows={3}
                />
                <TextField
                    id="sellPrice"
                    label="sellPrice"
                    type="text"
                    variant="outlined"
                    value={sellPrice} onChange={(e) => setSellPrice(e.target.value)}
                />
                <TextField
                    id="tax"
                    label="TAX %"
                    type="number"
                    variant="outlined"
                    value={tax} onChange={(e) => setTax(e.target.value)}
                />
                <TextField
                    id="itemPrice"
                    label="Item Price"
                    type="number"
                    variant="outlined"
                    value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}
                />
                <TextField
                    id="unitsPk"
                    label="Units in PK"
                    type="text"
                    variant="outlined"
                    value={unitsPk} onChange={(e) => setUnitsPk(e.target.value)}
                />
                <TextField
                    id="qty"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    value={qty} onChange={(e) => setQty(e.target.value)}
                />
                <TextField
                    id="amount"
                    label="Amount"
                    type="text"
                    variant="outlined"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                />
                <Button
                    style={{maxWidth: '14rem', maxHeight: '3rem', minWidth: '14rem', minHeight: '3rem'}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AddCircleRoundedIcon></AddCircleRoundedIcon>}
                >
                    ADD
                </Button>
                <TextField
                    id="totalAmount"
                    label="Total Amount"
                    type="text"
                    variant="outlined"
                    value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}
                />
                <TextField
                    id="currDisc"
                    label="Current Discount"
                    type="text"
                    variant="outlined"
                    value={currDisc} onChange={(e) => setCurrDisc(e.target.value)}
                />
                <TextField
                    id="totalNetWt"
                    label="Total Net Wt."
                    type="text"
                    variant="outlined"
                    value={totalNetWt} onChange={(e) => setTotalNetWt(e.target.value)}
                />
                <TextField
                    id="totalCube"
                    label="Total Cube"
                    type="text"
                    variant="outlined"
                    value={totalCube} onChange={(e) => setTotalCube(e.target.value)}
                />
                <TextField
                    id="totalGross"
                    label="Total Gross"
                    type="text"
                    variant="outlined"
                    value={totalGross} onChange={(e) => setTotalGross(e.target.value)}
                />
                <div className={classes.wrapper} style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}>
                        <Fab
                        aria-label="save"
                        color="primary"
                        className={buttonClassname}
                        onClick={handleButtonClick}
                    >
                        {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
            </form>
        </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setDescOfConsign: (descOfConsign) => dispatch(setDescOfConsign(descOfConsign))
});

const mapStateToProps = state => ({
    tradeDeal: state.tradeDeal
})

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm4);