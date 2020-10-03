import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/auth';
import tradeDealReducer from '../reducers/tradeDeal';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            tradeDeal: tradeDealReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
