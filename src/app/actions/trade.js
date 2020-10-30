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

//Get ipfs doc through trade id