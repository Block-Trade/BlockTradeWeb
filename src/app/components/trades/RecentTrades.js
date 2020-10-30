import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TradeCard from './TradeCard';

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
  

const RecentTrades = ({ trade,auth }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { trades } = trade.trades;
    console.log(trades);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const {user} = auth;
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
    var a;

    const handleStatusClick = ({tradeStatus}) => {
        setStep(tradeStatus);
        setStatus(true);
    }
    return (
    
    <div className="row">
      {trades && trades.map(trad => <TradeCard trade={trad} user={user} />)}
      </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth,trade: state.trade
});

export default connect(mapStateToProps)(RecentTrades);