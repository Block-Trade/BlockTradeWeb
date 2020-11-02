import React, { Component, useEffect } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import { Settings } from '@material-ui/icons';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

const MyTrade = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    
  },[]);
    return <div>This is a my trade page</div>;
}
export default connect(null,{ loadUser })(MyTrade);
