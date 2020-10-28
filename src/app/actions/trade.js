import axios from 'axios';

export const getAllTrades = () => async dispatch => {
    try {
        const trades = await axios.get('/trade');
        console.log(trades);
        
    } catch (e) {
        
    }
}

//Get ipfs doc through trade id