import React, { Component, useEffect } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import { Settings } from '@material-ui/icons';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getAllTrades } from '../../actions/trade';
import RecenTrades from '../trades/RecentTrades';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

const MyTrade = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    
    
  },[]);

 
  return (
    <RecenTrades />
  );
}
export default connect(null,{ loadUser })(MyTrade);
