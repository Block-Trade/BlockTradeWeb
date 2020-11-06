/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState, useEffect, Fragment } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { statusUpdate } from '../../actions/trade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import LocalShipping from '@material-ui/icons/LocalShipping';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckCircle from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    '&:hover': {
      transform: 'translate3D(0,-1px,0) scale(1.03)',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper1: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  btn: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    marginRight: '5px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#f3f4fa',
    borderColor: '#f3f4fa',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#f3f4fa',
      transform: 'translate3D(0,-1px,0) scale(1.03)',
      boxShadow:
        '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04)',
      transition: 'all .6s ease',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#f3f4fa',
      borderColor: '#ffffff',
    },
  },
}));

function getSteps() {
  return [
    'Documents Uploaded',
    'Documents Verified',
    'Goods Laided',
    'Goods Received',
    'Payment complete',
  ];
}

const TradeCard = ({ auth, trade, user, statusUpdate, conn }) => {
  const classes = useStyles();
  var d;
  const bull = <span className={classes.bullet}>•</span>;
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [status, setStatus] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setStep = (status) => {
    switch (status) {
      case 'DU':
        setActiveStep(0);
        break;
      case 'DV':
        setActiveStep(1);
        break;
      case 'GL':
        setActiveStep(2);
        break;
      case 'GR':
        setActiveStep(3);
        break;
      case 'PD':
        setActiveStep(4);
        break;
    }
  };

  const handleStatusClick = ({ tradeStatus }) => {
    setStep(tradeStatus);
    setStatus(true);
  };

  return (
    <div className='col-lg-6 col-md-6 col-sm-6 grid-margin'>
      <Card
        className={classes.root}
        raised={true}
        style={{
          backgroundImage: 'linear-gradient(120deg, #2d5fc3, #128bfc, #18bef1)',
          color: 'white',
          borderRadius: 20,
          maxWidth: '40rem',
          maxHeight: '40rem',
        }}
      >
        <CardContent>
          <div className='d-flex'>
            <div className='profile-image'>
              <img
                src={require('../../../assets/images/circle-cropped.png')}
                alt='profile'
                style={{
                  maxHeight: '110px',
                  maxWidth: '120px',
                  marginLeft: '2rem',
                }}
              />
            </div>
            <div
              className='text-right ml-3'
              style={{ paddingLeft: '2rem', paddingTop: '3rem' }}
            >
              <h4 className='profile-name' style={{ color: 'black' }}>
                {trade.exporterUserName === user.username
                  ? `Importer Name:`
                  : `Exporter Name:`}
                <span style={{ color: 'white' }}>
                  &nbsp;&nbsp;
                  {trade.exporterUserName === user.username
                    ? `${trade.importerUserName}`
                    : `${trade.exporterUserName}`}
                </span>
              </h4>
            </div>
          </div>
          <hr />
          <Typography
            component='h2'
            style={{ wordWrap: 'break-word', color: 'black' }}
          >
            Trade Id:{' '}
            <span style={{ color: 'white' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{trade.TradeId}
            </span>
          </Typography>
          <hr />
          <h5 style={{ color: 'black' }}>
            Status :
            <span style={{ color: 'white' }}>
              &nbsp;&nbsp;&nbsp;{steps[activeStep]}
            </span>
          </h5>
          <h5 style={{ color: 'black' }}>
            Payment Type :
            <span style={{ color: 'white' }}>
              &nbsp;&nbsp;&nbsp;{trade.paymentType}
            </span>
          </h5>
          {trade.paymentType==='PA' && trade.creditPeriod !== 0 && (
            <h5 style={{ color: 'black' }}>
              Credit Period :
              <span style={{ color: 'white' }}>
                &nbsp;&nbsp;&nbsp;{(trade.creditPeriod !== 0) && `${trade.creditPeriod}`}
              </span>
            </h5>
          )}
          <h5 style={{ color: 'black' }}>
            Amount :
            <span style={{ color: 'white' }}>
              &nbsp;&nbsp;&nbsp;{trade.amount}
            </span>
          </h5>
        </CardContent>
        <CardActions style={{ color: 'ffffff' }}>
          <Button className={classes.btn} style={{ marginLeft: '1rem' }}>
            View Details
          </Button>
          <Button className={classes.btn} onClick={handleOpen}>
            Check Status
          </Button>
          {trade.importerUserName === user.username &&
            trade.tradeStatus === 'DU' && (
              <Button
                className={classes.btn}
                onClick={() => {
                  statusUpdate({ tradeId: trade.TradeId, status: 'IV' });
                }}
              >
                Verify document
              </Button>
            )}
          {trade.tradeStatus === 'DV' &&
            trade.exporterUserName === user.username && (
              <Button
                className={classes.btn}
                onClick={() => {
                  statusUpdate({ tradeId: trade.TradeId, status: 'GL' });
                }}
              >
                Goods Laided
              </Button>
            )}
          {trade.tradeStatus === 'GL' &&
            trade.importerUserName === user.username && (
              <Button
                className={classes.btn}
                onClick={() => {
                  statusUpdate({ tradeId: trade.TradeId, status: 'GD' });
                }}
              >
                Goods Recieved
              </Button>
            )}
        </CardActions>
      </Card>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ width: '50%' }}>
            <h4 id='transition-modal-title'>Trade Status</h4>
            <div>
              <Timeline align='alternate'>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot>
                      <CheckCircle />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className={classes.paper1}
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: 20,
                      }}
                    >
                      <Typography variant='h6' component='h1' align='center'>
                        Documents Uploaded
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color='primary'>
                      {trade.tradeStatus === 'DV' ||
                      trade.tradeStatus === 'GL' ||
                      trade.tradeStatus === 'GD' ||
                      trade.tradeStatus === 'PD' ? (
                        <CheckCircle />
                      ) : (
                        <VerifiedUser />
                      )}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className={classes.paper1}
                      style={{
                        backgroundColor:
                          (trade.tradeStatus === 'DV' ||
                            trade.tradeStatus === 'GL' ||
                            trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'green',
                        color:
                          (trade.tradeStatus === 'DV' ||
                            trade.tradeStatus === 'GL' ||
                            trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'white',
                        borderRadius: 20,
                      }}
                    >
                      <Typography variant='h6' component='h1' align='center'>
                        Documents Verified
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color='primary' variant='outlined'>
                      {trade.tradeStatus === 'GL' ||
                      trade.tradeStatus === 'GD' ||
                      trade.tradeStatus === 'PD' ? (
                        <CheckCircle />
                      ) : (
                        <LocalShipping />
                      )}
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className={classes.paper1}
                      style={{
                        backgroundColor:
                          (trade.tradeStatus === 'GL' ||
                            trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'green',
                        color:
                          (trade.tradeStatus === 'GL' ||
                            trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'white',
                        borderRadius: 20,
                      }}
                    >
                      <Typography variant='h6' component='h1' align='center'>
                        Goods Laided
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color='secondary'>
                      {trade.tradeStatus === 'GD' ||
                      trade.tradeStatus === 'PD' ? (
                        <CheckCircle />
                      ) : (
                        <ConfirmationNumberIcon />
                      )}
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className={classes.paper1}
                      style={{
                        backgroundColor:
                          (trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'green',
                        color:
                          (trade.tradeStatus === 'GD' ||
                            trade.tradeStatus === 'PD') &&
                          'white',
                        borderRadius: 20,
                      }}
                    >
                      <Typography variant='h6' component='h1' align='center'>
                        Goods Delivered
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color='secondary' variant='outlined'>
                      {trade.tradeStatus === 'PD' ? (
                        <CheckCircle />
                      ) : (
                        <PaymentIcon />
                      )}
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      elevation={3}
                      className={classes.paper1}
                      style={{
                        backgroundColor: trade.tradeStatus === 'PD' && 'green',
                        color: trade.tradeStatus === 'PD' && 'white',
                        borderRadius: 20,
                      }}
                    >
                      <Typography variant='h6' component='h1' align='center'>
                        Payment Done
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({ conn: state.conn, auth: state.auth });

export default connect(mapStateToProps, { statusUpdate })(TradeCard);
