import React,{ useState, useEffect,Fragment } from 'react'
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
import {statusUpdate} from '../../actions/trade';
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


const TradeCard = ({trade, user, statusUpdate, conn}) => {
    const classes = useStyles();
    var d;
    useEffect(async () => {
      d = await conn.trades_contract.methods.getTrade(trade.TradeId).call();
      d = 'https://ipfs.infura.io/ipfs/' + d; 
      console.log(d);
    },[]);
    const bull = <span className={classes.bullet}>•</span>;
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [status,setStatus] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const setStep = (status) => {
        switch(status){
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
    }
  

  const handleStatusClick = ({ tradeStatus }) => {
    setStep(tradeStatus);
    setStatus(true);
  };


    return (
        <div className='col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
        <Card className={classes.root} raised={true} style={{
          backgroundImage: 'linear-gradient(120deg, #2d5fc3, #128bfc, #18bef1)',
          color: 'white',
          borderRadius:20
        }}>
        <CardContent>
      
          <Typography className={classes.title} gutterBottom style={{ color: 'black' }}>
              <Fragment>
            {trade.exporterUserName === user.username ? ((`Importer Name:`)):(`Exporter Name:`)}
            <span style={{ color: 'white' }}>{trade.exporterUserName === user.username ? `${trade.importerUserName}`:`${trade.exporterUserName}`}</span></Fragment>
          </Typography>
          <Typography variant="h5" component="h2" style={{wordWrap:"break-word",color:'black'}}>
            Trade Id: <span style={{ color: 'white' }}>{trade.TradeId}</span>
          </Typography>
          <Typography className={classes.pos} style={{ color: 'black' }}>
            Status: <span style={{ color: 'white' }}>{steps[activeStep]}</span>
          </Typography>
          <Typography variant="body2" component="p" style={{ color: 'black' }}>
            Payment Time: <span style={{ color: 'white' }}>{trade.paymentType}</span>
            <br />
            <Fragment>
            {trade.creditPeriod!==0 && `Credit Period:`}
            <span style={{ color: 'white' }}>{trade.creditPeriod!==0&&`${trade.creditPeriod}`}</span></Fragment>
            <br />
            Amount: <span style={{ color: 'white' }}>{trade.amount}</span>
          </Typography>
        </CardContent>
        <CardActions style={{ color: 'ffffff' }}>
          
          {trade.importerUserName === user.username &&
            trade.tradeStatus === 'DU' && (
              <Button
                size='small'
                style={{ backgroundColor: 'ffffff' }}
                onClick={() => {
                  statusUpdate({ tradeId: trade.TradeId, status: 'IV' });
                }}
              >
                Verify document
              </Button>
            )}
          
          <Button size="small">View Details</Button>
          <Button size="small" onClick={handleOpen}>Check Status</Button>
          {((trade.importerUserName === user.username) && (trade.tradeStatus==='DU')) && <Button size="small" onClick={() => {
            statusUpdate({tradeId: trade.TradeId,status:'IV'})
          }}>Verify document</Button>}
          {(trade.tradeStatus==='DV' && trade.exporterUserName===user.username) && <Button size="small" onClick={() => {
            statusUpdate({tradeId: trade.TradeId,status:'GL'})
          }}>Goods Laided</Button>}
          {(trade.tradeStatus==='GL' && trade.importerUserName===user.username) && <Button size="small" onClick={() => {
            statusUpdate({tradeId: trade.TradeId,status:'GD'})
          }}>Goods Recieved</Button>}
        </CardActions>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
          <div className={classes.paper}  style={{width:"50%"}}>
            <h4 id="transition-modal-title">Trade Status</h4>
            <div >
      
      <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <CheckCircle />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper1} style={{backgroundColor:"green", color:"white", borderRadius:20}}>
                  <Typography variant="h6" component="h1" align="center">
                    Documents Uploaded
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {(trade.tradeStatus==='DV'||trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')?<CheckCircle />:<VerifiedUser />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper1} style={{backgroundColor:((trade.tradeStatus==='DV'||trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"green"),color:((trade.tradeStatus==='DV'||trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"white"), borderRadius:20}}>
                  <Typography variant="h6" component="h1" align="center">
                    Documents Verified
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  {(trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')?<CheckCircle />:<LocalShipping />}
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper1} style={{backgroundColor:(trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"green",color:(trade.tradeStatus==='GL'||trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"white", borderRadius:20}}>
                  <Typography variant="h6" component="h1" align="center">
                    Goods Laided
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                {(trade.tradeStatus==='GD'||trade.tradeStatus==='PD')?<CheckCircle />:<ConfirmationNumberIcon />}
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper1} style={{backgroundColor:(trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"green",color:(trade.tradeStatus==='GD'||trade.tradeStatus==='PD')&&"white", borderRadius:20}}>
                  <Typography variant="h6" component="h1" align="center">
                    Goods Delivered
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined">
                {(trade.tradeStatus==='PD')?<CheckCircle />:<PaymentIcon />}
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper1} style={{backgroundColor:(trade.tradeStatus==='PD')&&"green",color:(trade.tradeStatus==='PD')&&"white", borderRadius:20}}>
                  <Typography variant="h6" component="h1" align="center">
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
    )
};

const mapStateToProps = (state) => ({ conn: state.conn });

export default connect(mapStateToProps, { statusUpdate })(TradeCard);
