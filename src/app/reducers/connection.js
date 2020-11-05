const initialState = {
    conn:null,
    trades_contract:null,
    current_account:null
};

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_ACCOUNT' :
            return {
                ...state, current_account: action.payload
            }
        case 'SET_TRADES_CONTRACT': 
            return {
                ...state, trades_contract: action.payload
            }
        default:
            return state;
    }
}