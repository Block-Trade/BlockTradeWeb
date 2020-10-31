import React, { useState, useEffect } from 'react';
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
import SaveOutlined from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
}));
const TradeForm1 = ({ history, setSellerInfo, tradeDeal }) => {
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
  const [sellerFirm, setSellerFirm] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [invoiceDue, setInvoiceDue] = useState(new Date());
  const [sellerAddr, setSellerAddr] = useState('');
  const [purposeShip, setPurposeShip] = useState('');
  const [party, setParty] = useState('');
  const [sellerCont, setSellerCont] = useState('');
  const [sellerTel, setSellerTel] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  useEffect(() => {
    const { sellerInfo } = tradeDeal;
    if (sellerInfo) {
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
  }, []);

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
      sellerEmail,
    };
    setSellerInfo(sellerInfo);
    console.log(sellerInfo);
    //history.push('/tradeform2');
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
        <h3
          style={{
            alignItems: 'center',
            fontSize: '2.5vw',
            marginBottom: '1rem',
          }}
        >
          Seller Information
        </h3>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id='sellerfirm'
              label='SellerFirm'
              type='text'
              variant='outlined'
              value={sellerFirm}
              onChange={(e) => setSellerFirm(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='invoice'
              label='Invoice Number'
              variant='outlined'
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                inputVariant='outlined'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Invoice Date'
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                inputVariant='outlined'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Invoice Due'
                value={invoiceDue}
                onChange={(e) => setInvoiceDue(e)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                style={{ width: '100%' }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='outlined-multiline-static'
              label='Seller Address'
              multiline
              rows={4}
              variant='outlined'
              value={sellerAddr}
              onChange={(e) => setSellerAddr(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='purpose'
              label='Purpose of shipment'
              variant='outlined'
              value={purposeShip}
              onChange={(e) => setPurposeShip(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='party'
              label='Party to transaction'
              variant='outlined'
              value={party}
              onChange={(e) => setParty(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='sellercont'
              label='Seller Contact'
              variant='outlined'
              value={sellerCont}
              onChange={(e) => setSellerCont(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='sellertel'
              label='Seller Telephone'
              variant='outlined'
              value={sellerTel}
              onChange={(e) => setSellerTel(e.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='selleremail'
              label='Seller Email'
              variant='outlined'
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              style={{ width: '100%' }}
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
                >
                  {success ? <CheckIcon /> : <SaveOutlined />}
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
  setSellerInfo: (sellerInfo) => dispatch(setSellerInfo(sellerInfo)),
});

const mapStateToProps = (state) => ({
  tradeDeal: state.tradeDeal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm1);
