import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setReceiverInfo } from '../../actions/tradeDeal';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
const TradeForm2 = ({ history, setReceiverInfo, tradeDeal }) => {
  const classes = useStyles();
  const [receiverFirm, setReceiverFirm] = useState('');
  const [receiverAddr, setReceiverAddr] = useState('');
  const [receiverCont, setReceiverCont] = useState('');
  const [receiverTel, setReceiverTel] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [dutyPay, setDutyPay] = useState('');
  const [payMeth, setPayMeth] = useState('');
  const [incurr, setIncurr] = useState('');
  const [inco, setInco] = useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = useState(false);
  const [flag, setFlag] = useState(true);
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
  };
  useEffect(() => {
    const { receiverInfo } = tradeDeal;
    if (receiverInfo) {
      setReceiverFirm(receiverInfo.receiverFirm);
      setReceiverAddr(receiverInfo.receiverAddr);
      setReceiverCont(receiverInfo.receiverCont);
      setReceiverTel(receiverInfo.receiverTel);
      setReceiverEmail(receiverInfo.receiverTel);
      setDutyPay(receiverInfo.dutyPay);
      setPayMeth(receiverInfo.payMeth);
      setInco(receiverInfo.inco);
      setIncurr(receiverInfo.incurr);
    }
    checkCondition();
  }, []);

  const nextForm = () => {
    const receiverInfo = {
      receiverFirm,
      receiverAddr,
      receiverCont,
      receiverTel,
      receiverEmail,
      dutyPay,
      payMeth,
      incurr,
      inco,
    };
    console.log(receiverInfo);
    setReceiverInfo(receiverInfo);
    //history.push('/tradeform3');
  };
  const checkCondition = () => {
    if (
      receiverFirm &&
      receiverAddr &&
      receiverCont &&
      receiverTel &&
      receiverEmail &&
      dutyPay &&
      payMeth &&
      incurr &&
      inco
    ) {
      setFlag(false);
    } else {
      setFlag(true);
    }
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
        <h3 style={{ alignItems: 'center', fontSize: '2vw' }}>
          Receiver/Consignee Information
        </h3>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id='receiverFirm'
              label='receiverFirm'
              type='text'
              variant='outlined'
              value={receiverFirm}
              onChange={(e) => {
                setReceiverFirm(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={receiverFirm === '' ? true : false}
              helperText={
                receiverFirm === '' ? 'Receiver Firm is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='receiverAddr'
              label='Receiver Address'
              variant='outlined'
              value={receiverAddr}
              onChange={(e) => {
                setReceiverAddr(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={receiverAddr === '' ? true : false}
              helperText={
                receiverAddr === '' ? 'Receiver Address is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='receiverCont'
              label='Receiver Contact'
              variant='outlined'
              value={receiverCont}
              onChange={(e) => {
                setReceiverCont(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={receiverCont === '' ? true : false}
              helperText={
                receiverCont === '' ? 'Receiver Contact is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='receiverTel'
              label='Receiver Telephone'
              variant='outlined'
              value={receiverTel}
              onChange={(e) => {
                setReceiverTel(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={receiverTel === '' ? true : false}
              helperText={
                receiverTel === '' ? 'Receiver Telephone is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='receiverEmail'
              label='Receiver Email'
              variant='outlined'
              value={receiverEmail}
              onChange={(e) => {
                setReceiverEmail(e.target.value);
                checkCondition();
              }}
              style={{ width: '100%' }}
              error={receiverEmail === '' ? true : false}
              helperText={
                receiverEmail === '' ? 'Receiver Email is required' : ''
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              style={{ width: '100%' }}
            >
              <InputLabel id='Taxes & Duty Payable By'>
                Taxes & duty payable by
              </InputLabel>
              <Select
                value={dutyPay}
                onChange={(e) => {
                  setDutyPay(e.target.value);
                  checkCondition();
                }}
                label='Taxes & Duty Payable By'
                error={dutyPay === '' ? true : false}
                helperText={dutyPay === '' ? 'Duty Pay is required' : ''}
                required
              >
                <MenuItem value={'exporter'}>Exporter</MenuItem>
                <MenuItem value={'importer'}>Importer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              style={{ width: '100%' }}
            >
              <InputLabel id='payMethod'>Payment Method</InputLabel>
              <Select
                value={payMeth}
                onChange={(e) => {
                  setPayMeth(e.target.value);
                  checkCondition();
                }}
                label='Payment Method'
                error={payMeth === '' ? true : false}
                helperText={payMeth === '' ? 'Payment Method is required' : ''}
                required
              >
                <MenuItem value={'adtk'}>Advanced Token</MenuItem>
                <MenuItem value={'asse'}>Assests</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              style={{ width: '100%' }}
            >
              <InputLabel id='curr'>Currency</InputLabel>
              <Select
                name='incurr'
                value={incurr}
                onChange={(e) => {
                  setIncurr(e.target.value);
                  checkCondition();
                }}
                label='Currency'
                error={incurr === '' ? true : false}
                helperText={incurr === '' ? 'Currency is required' : ''}
                required
              >
                <MenuItem value='' disabled selected>
                  Invoice Currency
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
            <FormControl
              variant='outlined'
              className={classes.formControl}
              style={{ width: '100%' }}
            >
              <InputLabel id='inco'>IncoTerms</InputLabel>
              <Select
                value={inco}
                onChange={(e) => {
                  setInco(e.target.value);
                  checkCondition();
                }}
                label='Incoterms'
                error={inco === '' ? true : false}
                helperText={inco === '' ? 'Incoterms is required' : ''}
                required
              >
                <MenuItem value='' disabled selected>
                  IncoTerms
                </MenuItem>
                <MenuItem value='EXW'>EXW - EX WORKS</MenuItem>
                <MenuItem value='FCA'>FCA - FREE CARRIER</MenuItem>
                <MenuItem value='FAS'>FAS - FREE ALONGSIDE SHIP</MenuItem>
                <MenuItem value='FOB'>FOB - FREE ON BOARD</MenuItem>
                <MenuItem value='CFR'>CFR - COST AND FREIGHT</MenuItem>
                <MenuItem value='CIF'>
                  CIF - COST, INSURANCE AND FREIGHT
                </MenuItem>
                <MenuItem value='CPT'>CPT - CARRIAGE PAID TO</MenuItem>
                <MenuItem value='CIP'>
                  CIP - CARRIAGE AND INSURANCE PAID TO
                </MenuItem>
                <MenuItem value='DAF'>DAF - DELIVERED AT FRONTIER</MenuItem>
                <MenuItem value='DES'>DES - DELIVERED EX SHIP</MenuItem>
                <MenuItem value='DEQ'>
                  DEQ - DELIVERED EX QUAY (DUTY PAID)
                </MenuItem>
                <MenuItem value='DDU'>DDU - DELIVERED DUTY UNPAID</MenuItem>
                <MenuItem value='DDP'>DDP - DELIVERED Duty PAID</MenuItem>
              </Select>
            </FormControl>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setReceiverInfo: (receiverInfo) => dispatch(setReceiverInfo(receiverInfo)),
});

const mapStateToProps = (state) => ({
  tradeDeal: state.tradeDeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm2);
