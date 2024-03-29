import axios from 'axios';
import Web3 from 'web3';

/*export const getAllTrades = () => async dispatch => {
    try {
        const trades = await axios.get('/trade');
        console.log(trades.data.trades[2]);
        const td = trades.data.trades;
        //dateChecker({trade: trades.data.trades[1]});
    
        td.map(async t => {
            if(t.paymentType==='PA' && t.rf===false){
                var date1 = new Date(t.invoiceDate);
                
                date1 = date1.addDays(t.creditPeriod);
                var date2 = new Date();
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                console.log(diffTime + " milliseconds");
                console.log(diffDays + " days");
                if(diffDays<=5){
                    const headers = {
                        'Content-Type':'application/json'
                    };
                    const resp = await axios.post('/reminder',{tradeId:t.TradeId},{
                        headers: headers
                    });
                    console.log(resp);
                }else{
                    console.log('Time for due');
                }
            }
        });

        dispatch({
            type:'SET_TRADES',
            payload: trades.data
        })
    } catch (e) {
        dispatch({
            type:'TRADE_ERROR'
        });
    }
}


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}*/

export const getAllTrades = () => async (dispatch) => {
  try {
    const trades = await axios.get('/trade');
    console.log(trades.data.trades[2]);
    const td = trades.data.trades;
    //dateChecker({trade: trades.data.trades[1]});
    /*td.map(async (t) => {
            //Write ur code here
            var flag = await conn.trades_contract.methods.allApproved("t.TradeId").call();
            console.log(flag);
        });*/
    td.map(async (t) => {
      if (t.paymentType === 'PA' && t.rf === false) {
        var date1 = new Date(t.invoiceDate);

        date1 = date1.addDays(t.creditPeriod);
        var date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffTime + ' milliseconds');
        console.log(diffDays + ' days');
        if (diffDays <= 5) {
          const headers = {
            'Content-Type': 'application/json',
          };
          const resp = await axios.post(
            '/reminder',
            { tradeId: t.TradeId },
            {
              headers: headers,
            }
          );
          console.log(resp);
        } else {
          console.log('Time for due');
        }
      }
    });

    dispatch({
      type: 'SET_TRADES',
      payload: trades.data,
    });
  } catch (e) {
    dispatch({
      type: 'TRADE_ERROR',
    });
  }
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
const dateChecker = ({ trade }) => async (dispatch) => {
  try {
    console.log('In date checker');
    if (trade.paymentType === 'PA') {
      var date = new Date(trade.invoiceDate);

      console.log(date.addDays(trade.creditPeriod));
    }
  } catch (e) {}
};

export const getWalletAddr = ({ username }) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = { username: username };
    const res = await axios.post('/trade/username', data, {
      headers: headers,
    });
    console.log(res.data);
    dispatch({
      type: 'SELECT_ADDR',
      payload: res.data.user.walletAddr,
    });
  } catch (e) {
    console.log(e);
  }
};

export const clearAddr = () => async (dispatch) => {
  dispatch({
    type: 'CLEAR_ADDR',
  });
};

export const statusUpdate = ({ tradeId, status }) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post(
      '/trade/update',
      { tradeId, tradeStatus: status },
      {
        headers: headers,
      }
    );
    console.log(res);
  } catch (e) {}
};

const updateStatus = async ({ tradeId, status }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const res = await axios.post(
      '/trade/update',
      { tradeId, tradeStatus: status },
      {
        headers: headers,
      }
    );
    console.log(res);
  } catch (e) {}
};

export const checkStatus = ({ conn, trades }) => async (dispatch) => {
  try {
    console.log(conn);
    console.log(trades);
    var td = trades.trades;
    td.map(async (t) => {
      console.log(t.TradeId);
      var flag = await conn.trades_contract.methods
        .allApproved(t.TradeId.toString())
        .call();
      console.log(flag);
      if (flag && td.tradeStatus === 'IV') {
        updateStatus({ tradeId: td.TradeId, status: 'DV' });
      }
    });
  } catch (e) {}
};
//Get ipfs doc through trade id
