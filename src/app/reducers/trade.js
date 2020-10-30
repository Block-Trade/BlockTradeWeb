const initialState = {
    trades: null
};

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_TRADES':
            return {
                ...state,
                trades:action.payload
            }
        default:
            return state;
    }
}