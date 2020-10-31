import React,{ useState } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    return ['Documents Uploaded', 'Documents Verified', 'Goods Laided','Goods Received','Payment complete'];
}

const TradeCard = ({trade, user}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [status,setStatus] = useState(false);
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

    const handleStatusClick = ({tradeStatus}) => {
        setStep(tradeStatus);
        setStatus(true);
    }

    return (
        <div className='col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
        <Card className={classes.root} style={{backgroundImage: "linear-gradient(white, #15a3f7)"}}>
        <CardContent>
      {status &&  <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>}
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {trade.exporterUserName === user.username ? ((`Importer Name:${trade.importerUserName}`)):(`Exporter Name:${trade.exporterUserName}`)}
          </Typography>
          <Typography variant="h5" component="h2">
            Trade Id: {trade.TradeId}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Status: {steps[activeStep]}
          </Typography>
          <Typography variant="body2" component="p">
            Due Date: {trade.dueDate}
            <br />
            Amount: {trade.amount}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Details</Button>
          {trade.importerUserName === user.username && <Button size="small">Verify document</Button>}
          {!status && <Button size="small" onClick={() => handleStatusClick({tradeStatus:trade.tradeStatus})}>Check Status</Button>}
        </CardActions>
      </Card>
      </div>
    )
}

export default TradeCard;