import axios from 'axios';

export const setSellerInfo = (sellerInfo) => async dispatch => {
    dispatch({
        type:'SET_SELLER_INFO',
        payload:sellerInfo
    });
}

export const setReceiverInfo = (receiverInfo) => async dispatch => {
    dispatch({
        type:'SET_RECEIVER_INFO',
        payload:receiverInfo
    });
}

export const setLogisticsInfo = (logisticsInfo) => async dispatch => {
    dispatch({
        type:'SET_LOGISTICS_INFO',
        payload:logisticsInfo
    });
}

export const setDescOfConsign = (descOfConsign) => async dispatch => {
    dispatch({
        type:'SET_DESC_OF_CONSIGNMENT',
        payload:descOfConsign
    });
}

export const setFinalBill = (finalBill) => async dispatch => {
    dispatch({
        type:'SET_FINAL_BILL',
        payload:finalBill
    });
}

export const resetDeal = () => async dispatch => {
    dispatch({
        type: 'RESET_DEAL'
    });
}

export const getUserId = () => async dispatch => {
    try {
        const res = await axios.get('/tradeid');
        console.log(res);
        const users = res.data.users;
        dispatch({
            type: 'USER_ID_FETCHED',
            payload: users
        });
    } catch (e) {
        console.log(e);
    }
}

export const filterName = ({text}) => dispatch => {
    dispatch({
        type: 'FILTER_NAME',
        payload: text
    });
}

export const clearFilter = () => dispatch => {
    dispatch({
        type: 'CLEAR_FILTER'
    });
}

export const setImpId = ({id}) => dispatch => {
    dispatch({
        type: 'SET_IMP_ID',
        payload: id
    });
}

export const finalUpload = ({data, finalBill}) => async dispatch => {
    try {
        const headers = {
            'Content-Type':'application/json'
        };
        const res = await axios.post('/trade',data,{
            headers: headers
        });
        console.log(res);
        // Put data on ipfs from res.data.TradeId
    } catch (e) {
    
    }
}