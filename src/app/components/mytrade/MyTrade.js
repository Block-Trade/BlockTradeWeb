import React, { Component, useEffect,Fragment, useState } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import { Settings } from '@material-ui/icons';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getAllTrades } from '../../actions/trade';
import RecentTrades from '../trades/RecentTrades';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TradeCard from '../trades/TradeCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const MyTrade = ({ loadUser, auth,trade,getAllTrades }) => {
  var trades;
  const classes = useStyles();
  const [compTrades,setCompTrades] =  useState([]);
  const [onTrades,setOnTrades] = useState([]);
  const [canTrades,setCanTrades] = useState([]);
  const theme = useTheme();

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    if(!auth.user){
      loadUser();
    
    }
    
  },[]);
  useEffect(() => {
    // Get all connections
    
    // Call to smart contract to check the status of document verification
    if(auth.user && !trade.trades){
      getAllTrades();
      
    }
  },[auth.user]);
 
  useEffect(() => {
    if(trade.trades){
      trades = trade.trades.trades;
      console.log(trades);
      setOnTrades(trades.filter(t => (t.tradeStatus!=='PD')));
      setCompTrades(trades.filter(t => (t.tradeStatus==='PD')));
      setCanTrades(trades.filter(t => (t.tradeStatus==='CA')));
    }

  },[trade.trades]);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{width:"100%", marginBottom:25}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ongoing Trades" {...a11yProps(0)} />
          <Tab label="Completed Trades" {...a11yProps(1)} />
          <Tab label="Cancelled Trades" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
          {value===0 && <div className='row'>
          {trade.trades &&
            onTrades.length===0?(<Typography>
              No trades to show
              </Typography>):onTrades.map((trad) => (
              <TradeCard style={{ color: 'ffffff' }} trade={trad} user={auth.user} />
            ))}
          </div>}
          {value===1 && <div className='row'>
          {trade.trades &&
            compTrades.length===0?(<Typography>
              No trades to show
              </Typography>):compTrades.map((trad) => (
              <TradeCard style={{ color: 'ffffff' }} trade={trad} user={auth.user} />
            ))}
          </div>}
          {value===2 && <div className='row'>
          {trade.trades &&
            canTrades.length===0?(<Typography align="center" variant="body1">
              No trades to show
              </Typography>):canTrades.map((trad) => (
              <TradeCard style={{ color: 'ffffff' }} trade={trad} user={auth.user} />
            ))}
          </div>}
          {console.log(onTrades)}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  trade: state.trade
})

export default connect(mapStateToProps,{ loadUser, getAllTrades })(MyTrade);
