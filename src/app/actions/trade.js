import axios from 'axios';

export const getAllTrades = () => async dispatch => {
    try {
        const trades = await axios.get('/trade');
        console.log(trades);
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

    }
}
//Get ipfs doc through trade id