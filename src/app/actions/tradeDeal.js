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