import React, { useState, useEffect } from 'react'
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
import { statusUpdate } from '../../actions/trade';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
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
}));

function getSteps() {
  return ['Documents Uploaded', 'Documents Verified', 'Goods Laided', 'Goods Received', 'Payment complete'];
}

const TradeCard = ({ trade, user, statusUpdate, conn }) => {
  const classes = useStyles();
  var d;
  useEffect(async () => {
    if (conn.trades_contract) {
      d = await conn.trades_contract.methods.getTrade(trade.TradeId).call();
      d = 'https://ipfs.infura.io/ipfs/' + d;
      console.log(d);
    }
  }, []);
  const bull = <span className={classes.bullet}>•</span>;
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [status, setStatus] = useState(false);
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
  }

  const handleStatusClick = ({ tradeStatus }) => {
    setStep(tradeStatus);
    setStatus(true);
  }
  useEffect(() => {
    setStep(trade.tradeStatus);
    setStatus(true);
  }, []);

  return (
    <div className='col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
      <Card className={classes.root} raised={true} style={{ backgroundImage: "linear-gradient(white, #15a3f7)", borderRadius: 20 }}>
        <CardContent>
          {status && <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundImage: "linear-gradient(white, #15a3f7)" }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>}
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {trade.exporterUserName === user.username ? ((`Importer Name:${trade.importerUserName}`)) : (`Exporter Name:${trade.exporterUserName}`)}
          </Typography>
          <Typography variant="h5" component="h2" style={{ wordWrap: "break-word" }}>
            Trade Id: {trade.TradeId}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Status: {steps[activeStep]}
          </Typography>
          <Typography variant="body2" component="p">
            Payment Time: {trade.paymentType}
            <br />
            {trade.creditPeriod !== 0 && `Credit Period: ${trade.creditPeriod}`}
            <br />
            Amount: {trade.amount}
          </Typography>
        </CardContent>
        <CardActions>
          {((trade.importerUserName === user.username) && (trade.tradeStatus === 'DU')) && <Button size="small" onClick={() => {
            statusUpdate({ tradeId: trade.TradeId, status: 'IV' })
          }}>Verify document</Button>}
          {(trade.tradeStatus === 'DV' && trade.exporterUserName === user.username) && <Button size="small" onClick={() => {
            statusUpdate({ tradeId: trade.TradeId, status: 'GL' })
          }}>Goods Laided</Button>}
          {(trade.tradeStatus === 'GL' && trade.importerUserName === user.username) && <Button size="small" onClick={() => {
            statusUpdate({ tradeId: trade.TradeId, status: 'GD' })
          }}>Goods Recieved</Button>}
        </CardActions>
      </Card>
    </div>
  )
}

const mapStateToProps = state => ({ conn: state.conn });

export default connect(mapStateToProps, { statusUpdate })(TradeCard);