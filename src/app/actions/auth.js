import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const signup = (formData) => async dispatch => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const res = await axios.post('/signup', formData, {
            headers: headers
        });
        console.log(res);

        dispatch({
            type: 'SIGNUP_SUCCESS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'SIGNUP_ERROR',
            payload:err.response.data.msg
        });
    }
}


export const activateUser = (token) => async dispatch => {
    const headers = {
        'Content-Type': 'application/json'
    };
    console.log(token);
    const body = {
        token
    };
    try {
        const res = await axios.post('/activate',body, {
            headers: headers
        });
    
        console.log(res);
        dispatch({
            type: 'ACTIVATE_SUCCESS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'ACTIVATE_ERROR',
            payload:err.response.data.msg
        });
    }
    
}

const loadUser = async ()=> async dispatch => {
    // @todo - load token into global header
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/login');

        dispatch({
            type: 'USER_LOADED',
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type:'AUTH_ERROR'
        });
    }
};

export const login = (formData) => async dispatch => {
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const res = await axios.post('/login', formData, {
            headers: headers
        });

        console.log(res);
        dispatch({
            type:'LOGIN_SUCCESS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'LOGIN_ERROR',
            payload:err.response.data.msg
        });
    }
}

export const clearMsg = () => async dispatch => {
    dispatch({
        type: 'CLEAR_MSG'
    });
}

export const clearError = () => async dispatch => {
    dispatch({
        type: 'CLEAR_ERROR'
    });
}