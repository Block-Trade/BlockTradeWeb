import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setFinalBill } from '../../actions/tradeDeal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
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

const TradeForm5 = ({ history, setFinalBill, tradeDeal }) => {
  const classes = useStyles();
  const [curr, setCurr] = useState('');
  const [adjTotal, setAdjTotal] = useState('');
  const [devAmount, setDevAmount] = useState('');
  const [packingChg, setPackingChg] = useState('');
  const [handChg, setHandChg] = useState('');
  const [otherChg, setOtherChg] = useState('');
  const [insurAmount, setInsurAmount] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [preTaxAmount, setPreTaxAmount] = useState('');
  const [tradeTotal, setTradeTotal] = useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = useState(false);
  const [flag, setFlag] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState('error');
  const [message, setMessage] = React.useState('');
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
    localStorage.setItem('flag', flag);
    setMessage('New Trade initiated successfully');
    setVariant('success');
    setOpen(true);
  };
  useEffect(() => {
    const { billDetails } = tradeDeal;
    if (billDetails) {
      setCurr(billDetails.curr);
      setAdjTotal(billDetails.adjTotal);
      setDevAmount(billDetails.devAmount);
      setPackingChg(billDetails.packingChg);
      setHandChg(billDetails.handChg);
      setOtherChg(billDetails.otherChg);
      setInsurAmount(billDetails.insurAmount);
      setTaxAmount(billDetails.taxAmount);
      setPreTaxAmount(billDetails.preTaxAmount);
      setTradeTotal(billDetails.tradeTotal);
    }
  }, []);
  const nextForm = () => {
    const finalBill = {
      curr,
      adjTotal,
      devAmount,
      packingChg,
      handChg,
      otherChg,
      taxAmount,
      preTaxAmount,
      tradeTotal,
    };
    console.log(finalBill);
    setFinalBill(finalBill);
    //history.push('/tradedeal');
  };
  const checkCondition = () => {
    if (
      curr &&
      adjTotal &&
      devAmount &&
      packingChg &&
      handChg &&
      otherChg &&
      taxAmount &&
      preTaxAmount &&
      tradeTotal
    ) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
  return (
    <div
      className={classes.root}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='sm'>
        <h3 style={{ alignItems: 'center', fontSize: '2vw' }}>Bill Details</h3>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              style={{ width: '100%' }}
            >
              <InputLabel id='curr'>Currency</InputLabel>
              <Select
                name='curr'
                value={curr}
                onChange={(e) => setCurr(e.target.value)}
                label='Currency'
              >
                <MenuItem value='' disabled selected>
                  Currency
                </MenuItem>
                <MenuItem value='USD' selected='selected'>
                  United States Dollars
                </MenuItem>
                <MenuItem value='EUR'>Euro</MenuItem>
                <MenuItem value='GBP'>United Kingdom Pounds</MenuItem>
                <MenuItem value='DZD'>Algeria Dinars</MenuItem>
                <MenuItem value='ARP'>Argentina Pesos</MenuItem>
                <MenuItem value='AUD'>Australia Dollars</MenuItem>
                <MenuItem value='ATS'>Austria Schillings</MenuItem>
                <MenuItem value='BSD'>Bahamas Dollars</MenuItem>
                <MenuItem value='BBD'>Barbados Dollars</MenuItem>
                <MenuItem value='BEF'>Belgium Francs</MenuItem>
                <MenuItem value='BMD'>Bermuda Dollars</MenuItem>
                <MenuItem value='BRR'>Brazil Real</MenuItem>
                <MenuItem value='BGL'>Bulgaria Lev</MenuItem>
                <MenuItem value='CAD'>Canada Dollars</MenuItem>
                <MenuItem value='CLP'>Chile Pesos</MenuItem>
                <MenuItem value='CNY'>China Yuan Renmimbi</MenuItem>
                <MenuItem value='CYP'>Cyprus Pounds</MenuItem>
                <MenuItem value='CSK'>Czech Republic Koruna</MenuItem>
                <MenuItem value='DKK'>Denmark Kroner</MenuItem>
                <MenuItem value='NLG'>Dutch Guilders</MenuItem>
                <MenuItem value='XCD'>Eastern Caribbean Dollars</MenuItem>
                <MenuItem value='EGP'>Egypt Pounds</MenuItem>
                <MenuItem value='FJD'>Fiji Dollars</MenuItem>
                <MenuItem value='FIM'>Finland Markka</MenuItem>
                <MenuItem value='FRF'>France Francs</MenuItem>
                <MenuItem value='DEM'>Germany Deutsche Marks</MenuItem>
                <MenuItem value='XAU'>Gold Ounces</MenuItem>
                <MenuItem value='GRD'>Greece Drachmas</MenuItem>
                <MenuItem value='HKD'>Hong Kong Dollars</MenuItem>
                <MenuItem value='HUF'>Hungary Forint</MenuItem>
                <MenuItem value='ISK'>Iceland Krona</MenuItem>
                <MenuItem value='INR'>India Rupees</MenuItem>
                <MenuItem value='IDR'>Indonesia Rupiah</MenuItem>
                <MenuItem value='IEP'>Ireland Punt</MenuItem>
                <MenuItem value='ILS'>Israel New Shekels</MenuItem>
                <MenuItem value='ITL'>Italy Lira</MenuItem>
                <MenuItem value='JMD'>Jamaica Dollars</MenuItem>
                <MenuItem value='JPY'>Japan Yen</MenuItem>
                <MenuItem value='JOD'>Jordan Dinar</MenuItem>
                <MenuItem value='KRW'>Korea (South) Won</MenuItem>
                <MenuItem value='LBP'>Lebanon Pounds</MenuItem>
                <MenuItem value='LUF'>Luxembourg Francs</MenuItem>
                <MenuItem value='MYR'>Malaysia Ringgit</MenuItem>
                <MenuItem value='MXP'>Mexico Pesos</MenuItem>
                <MenuItem value='NLG'>Netherlands Guilders</MenuItem>
                <MenuItem value='NZD'>New Zealand Dollars</MenuItem>
                <MenuItem value='NOK'>Norway Kroner</MenuItem>
                <MenuItem value='PKR'>Pakistan Rupees</MenuItem>
                <MenuItem value='XPD'>Palladium Ounces</MenuItem>
                <MenuItem value='PHP'>Philippines Pesos</MenuItem>
                <MenuItem value='XPT'>Platinum Ounces</MenuItem>
                <MenuItem value='PLZ'>Poland Zloty</MenuItem>
                <MenuItem value='PTE'>Portugal Escudo</MenuItem>
                <MenuItem value='ROL'>Romania Leu</MenuItem>
                <MenuItem value='RUR'>Russia Rubles</MenuItem>
                <MenuItem value='SAR'>Saudi Arabia Riyal</MenuItem>
                <MenuItem value='XAG'>Silver Ounces</MenuItem>
                <MenuItem value='SGD'>Singapore Dollars</MenuItem>
                <MenuItem value='SKK'>Slovakia Koruna</MenuItem>
                <MenuItem value='ZAR'>South Africa Rand</MenuItem>
                <MenuItem value='KRW'>South Korea Won</MenuItem>
                <MenuItem value='ESP'>Spain Pesetas</MenuItem>
                <MenuItem value='XDR'>Special Drawing Right (IMF)</MenuItem>
                <MenuItem value='SDD'>Sudan Dinar</MenuItem>
                <MenuItem value='SEK'>Sweden Krona</MenuItem>
                <MenuItem value='CHF'>Switzerland Francs</MenuItem>
                <MenuItem value='TWD'>Taiwan Dollars</MenuItem>
                <MenuItem value='THB'>Thailand Baht</MenuItem>
                <MenuItem value='TTD'>Trinidad and Tobago Dollars</MenuItem>
                <MenuItem value='TRL'>Turkey Lira</MenuItem>
                <MenuItem value='VEB'>Venezuela Bolivar</MenuItem>
                <MenuItem value='ZMK'>Zambia Kwacha</MenuItem>
                <MenuItem value='EUR'>Euro</MenuItem>
                <MenuItem value='XCD'>Eastern Caribbean Dollars</MenuItem>
                <MenuItem value='XDR'>Special Drawing Right (IMF)</MenuItem>
                <MenuItem value='XAG'>Silver Ounces</MenuItem>
                <MenuItem value='XAU'>Gold Ounces</MenuItem>
                <MenuItem value='XPD'>Palladium Ounces</MenuItem>
                <MenuItem value='XPT'>Platinum Ounces</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='adjTotal'
              label='Adjusted Total'
              type='text'
              variant='outlined'
              value={adjTotal}
              onChange={(e) => {
                setAdjTotal(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={adjTotal === '' ? true : false}
              helperText={adjTotal === '' ? 'Adjusted Total is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='devAmount'
              label='Dev Amount'
              type='text'
              variant='outlined'
              value={devAmount}
              onChange={(e) => {
                setDevAmount(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={devAmount === '' ? true : false}
              helperText={devAmount === '' ? 'Dev Amount is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='packingChg'
              label='Packing Charges'
              type='text'
              variant='outlined'
              value={packingChg}
              onChange={(e) => {
                setPackingChg(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={packingChg === '' ? true : false}
              helperText={
                packingChg === '' ? 'Packaging Charges is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='handChg'
              label='Handling Charges'
              type='text'
              variant='outlined'
              value={handChg}
              onChange={(e) => {
                setHandChg(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={handChg === '' ? true : false}
              helperText={handChg === '' ? 'Handling Charges is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='otherChg'
              label='Other Charges'
              type='text'
              variant='outlined'
              value={otherChg}
              onChange={(e) => {
                setOtherChg(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={otherChg === '' ? true : false}
              helperText={otherChg === '' ? 'Other Charges is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='insurAmount'
              label='Insurance Amount'
              type='text'
              variant='outlined'
              value={insurAmount}
              onChange={(e) => {
                setInsurAmount(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={insurAmount === '' ? true : false}
              helperText={
                insurAmount === '' ? 'Insurance Amount is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='taxAmount'
              label='Tax Amount'
              type='text'
              variant='outlined'
              value={taxAmount}
              onChange={(e) => {
                setTaxAmount(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={taxAmount === '' ? true : false}
              helperText={taxAmount === '' ? 'Tax Amount is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='preTaxAmount'
              label='Pre-Tax Amount'
              type='text'
              variant='outlined'
              value={preTaxAmount}
              onChange={(e) => {
                setPreTaxAmount(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={preTaxAmount === '' ? true : false}
              helperText={
                preTaxAmount === '' ? 'Pre Tax Amount is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='tradeTotal'
              label='Trade Total'
              type='text'
              variant='outlined'
              value={tradeTotal}
              onChange={(e) => {
                setTradeTotal(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={tradeTotal === '' ? true : false}
              helperText={tradeTotal === '' ? 'Trade Total is required' : ''}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className={classes.wrapper}>
                <Fab
                  aria-label='save'
                  color='primary'
                  className={buttonClassname}
                  onClick={handleButtonClick}
                  disabled={flag}
                >
                  {success ? <CheckIcon /> : <SaveIcon />}
                </Fab>
                {loading && (
                  <CircularProgress size={68} className={classes.fabProgress} />
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert onClose={handleClose} severity={variant}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFinalBill: (finalBill) => dispatch(setFinalBill(finalBill)),
});

const mapStateToProps = (state) => ({
  tradeDeal: state.tradeDeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm5);
