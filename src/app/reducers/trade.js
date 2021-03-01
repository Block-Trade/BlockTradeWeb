const initialState = {
    trades: null,
    selectedAddr: null
};

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_TRADES':
            return {
                ...state,
                trades:action.payload
            }
        case 'SELECT_ADDR':
            return {
                ...state,
                selectedAddr: action.payload
            }
        case 'CLEAR_ADDR':
            return {
                ...state,
                selectedAddr: null
            };
        default:
            return state;
    }
}