import axios from 'axios';
import Web3 from 'web3';

export const getAllTrades = () => async dispatch => {
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
}

export const checkStatus = ({conn, trades}) => async dispatch => {
    try{
        console.log(conn);
        console.log(trades);
        console.log(trades[0].TradeId);
        var flag = await conn.trades_contract.methods.allApproved("eU0hlwXZtG85gPrwT3ZhY6w1eqhCUmQgXkNbV/2QtOQ=").call();
        console.log(flag);
        flag = await conn.trades_contract.methods.allApproved("4I2AYjWWj0+S2HBHBIyyKgZ1SLk+fgW5RVPmVnOv8tQ=").call();
        console.log(flag);
    }catch (e){

    }
}


export const statusUpdate = ({tradeId, status}) => async dispatch => {
    try {
        const headers = {
            'Content-Type':'application/json'
        }
        const res = await axios.post('/trade/update',{tradeId,tradeStatus: status},{
            headers: headers
        });
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}
//Get ipfs doc through trade id