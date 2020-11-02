const initialState = {
    conn:null,
    trades_contract:null
};

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_TRADES_CONTRACT': 
            return {
                ...state, trades_contract: action.payload
            }
        default:
            return state;
    }
}