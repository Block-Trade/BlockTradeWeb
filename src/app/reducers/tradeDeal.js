const initialState = {
    userIds: null,
    sellerInfo: {},
    receiverInfo: {},
    logisticsInfo: {},
    descOfConsign: {},
    finalBill: {},
    filtered: null,
    selectedImpId: null
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
        case 'USER_ID_FETCHED':
            return {
                ...state,
                userIds: action.payload
            };
        case 'FILTER_NAME':
            return {
                ...state,
                filtered: state.userIds.filter(id => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return id.username.match(regex);
                })
            };
        case 'SET_IMP_ID':
            return {
                ...state,
                selectedImpId: action.payload
            };
        case 'RESET_DEAL':
            return {
                sellerInfo:{},
                receiverInfo:{},
                logisticsInfo:{},
                descOfConsign:{},
                finalBill:{}
            };
        case 'CLEAR_FILTER':
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
}