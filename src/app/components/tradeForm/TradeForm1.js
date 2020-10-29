import React,{ useState,useEffect } from 'react';
import { setSellerInfo } from '../../actions/tradeDeal';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';


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
}));
const TradeForm1 = ({history,setSellerInfo, tradeDeal}) => {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

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
    const [sellerFirm, setSellerFirm] = useState("");
    const [invoiceNo, setInvoiceNo] = useState("");
    const [invoiceDate,setInvoiceDate] = useState(new Date());
    const [invoiceDue,setInvoiceDue] = useState(new Date());
    const [sellerAddr,setSellerAddr] = useState("");
    const [purposeShip,setPurposeShip] = useState("");
    const [party,setParty] = useState("");
    const [sellerCont,setSellerCont] = useState("");
    const [sellerTel,setSellerTel] = useState("");
    const [sellerEmail,setSellerEmail] = useState("");
    //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  

    useEffect(() => {
        const { sellerInfo } = tradeDeal;
        if(sellerInfo){
            setSellerFirm(sellerInfo.sellerFirm);
            setInvoiceNo(sellerInfo.invoiceNo);
            setInvoiceDate(sellerInfo.invoiceDate);
            setInvoiceDue(sellerInfo.invoiceDue);
            setSellerAddr(sellerInfo.sellerAddr);
            setPurposeShip(sellerInfo.purposeShip);
            setParty(sellerInfo.party);
            setSellerCont(sellerInfo.sellerCont);
            setSellerTel(sellerInfo.sellerTel);
            setSellerEmail(sellerInfo.sellerEmail);
        }
    },[]);

    const nextForm = () => {
        const sellerInfo = {
            sellerFirm,
            invoiceNo,
            invoiceDate,
            invoiceDue,
            sellerAddr,
            purposeShip,
            party,
            sellerCont,
            sellerTel,
            sellerEmail
        };
        setSellerInfo(sellerInfo);
        console.log(sellerInfo);
        //history.push('/tradeform2');
    }

    return (
        <div className={classes.root}>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Grid item xs={12} alignContent="center">
            <h3 style={{alignItems:"center"}}>Seller Information</h3>
        </Grid>
            <Grid item xs={12}>
            <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item md={4}>
                <TextField id="sellerfirm" label="SellerFirm" variant="outlined" value={sellerFirm} onChange={(e) => setSellerFirm(e.target.value)}  />
                </Grid>
                <Grid item md={4}>
                <TextField id="invoice" label="Invoice Number" variant="outlined" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)}  />
                </Grid>
            </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Invoice Date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                  />
                </Grid>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Invoice Due"
                    value={invoiceDue}
                    onChange={(e) => setInvoiceDue(e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
                  />
                </Grid>
                </MuiPickersUtilsProvider>
                <TextField
                id="outlined-multiline-static"
                label="Seller Address"
                multiline
                rows={4}
                variant="outlined"
                value={sellerAddr} onChange={(e) => setSellerAddr(e.target.value)}
                />
                <TextField id="purpose" label="Purpose of shipment" variant="outlined" value={purposeShip} onChange={(e) => setPurposeShip(e.target.value)}  />
                <TextField id="party" label="Party to transaction" variant="outlined" value={party} onChange={(e) => setParty(e.target.value)}  />
                <TextField id="sellercont" label="Seller Contact" variant="outlined" value={sellerCont} onChange={(e) => setSellerCont(e.target.value)}  />
                <TextField id="sellertel" label="Seller Telephone" variant="outlined" value={sellerTel} onChange={(e) => setSellerTel(e.target.value)}  />
                <TextField id="selleremail" label="Seller Email" variant="outlined" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)}  />

{/*                <div className="input-field">
                    <label htmlFor="sellerFirm">Seller Firm {" "}</label>
                    <input type="text" name="sellerFirm" id="sellerFirm" value={sellerFirm} onChange={(e) => setSellerFirm(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceNo">Invoice Number {" "}</label>
                    <input type="text" name="invoiceNo" id="invoiceNo" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceDate">Invoice Date {" "}</label>
                    <input type="date" name="invoiceDate" id="invoiceDate" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="invoiceDue">Invoice Due {" "}</label>
                    <input type="date" name="invoiceDue" id="invoiceDue" value={invoiceDue} onChange={(e) => setInvoiceDue(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerAddr">Seller Address {" "}</label>
                    <textarea id="sellerAddr" name="sellerAddr" value={sellerAddr} onChange={(e) => setSellerAddr(e.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="purposeShip">Purpose of Shipment {" "}</label>
                    <input type="text" name="purposeShip" id="purposeShip" value={purposeShip} onChange={(e) => setPurposeShip(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="party">Party to transaction {" "}</label>
                    <input type="text" name="party" id="party" value={party} onChange={(e) => setParty(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerCont">Seller Contact {" "}</label>
                    <input type="text" name="sellerCont" id="sellerCont" value={sellerCont} onChange={(e) => setSellerCont(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerTel">Seller Telephone {" "}</label>
                    <input type="text" name="sellerTel" id="sellerTel" value={sellerTel} onChange={(e) => setSellerTel(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="sellerEmail">Seller Email {" "}</label>
                    <input type="email" name="sellerEmail" id="sellerEmail" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
                </div>
*/}                <div className={classes.wrapper}>
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
            </Grid>
        </Grid>
        
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setSellerInfo: (sellerInfo) => dispatch(setSellerInfo(sellerInfo))
});

const mapStateToProps =state => ({
    tradeDeal: state.tradeDeal
})

export default connect(mapStateToProps,mapDispatchToProps)(TradeForm1);