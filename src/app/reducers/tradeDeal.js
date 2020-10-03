const initialState = {
    sellerInfo: {},
    receiverInfo: {},
    logisticsInfo: {},
    descOfConsign: {},
    finalBill: {}
};

export default (state=initialState, action) => {
    switch(action.type) {
        case 'SET_SELLER_INFO':
            return {
                ...state,
                sellerInfo:action.payload
            };
        case 'SET_RECEIVER_INFO':
            return {
                ...state,
                receiverInfo:action.payload
            };
        case 'SET_LOGISTICS_INFO':
            return {
                ...state,
                logisticsInfo:action.payload
            };
        case 'SET_DESC_OF_CONSIGNMENT':
            return {
                ...state,
                descOfConsign:action.payload
            };
        case 'SET_FINAL_BILL':
            return {
                ...state,
                finalBill:action.payload
            };
        case 'RESET_DEAL':
            return {
                sellerInfo:{},
                receiverInfo:{},
                logisticsInfo:{},
                descOfConsign:{},
                finalBill:{}
            };
        default:
            return state;
    }
}