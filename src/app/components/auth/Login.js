import React, { useState, useEffect } from 'react';
import { login, clearError, clearMsg } from '../../actions/auth';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = ({ auth: {msg, error}, login, clearError, clearMsg }) => {

    const [ username, setUser ] = useState('');
    const [ password, setPass ] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        const formData = {
            username,
            password
        };

        login(formData);
        clearError();
    }

    useEffect(() => {
        if(msg!=='') {
            M.toast({html: msg});
            clearMsg();
        }
    },[msg]);

    return (
        <div>
            {error && <p><span className="danger">{error}</span></p>}
            <form>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPass(e.target.value)} />
                </div>
                <button>Forgot Password?</button>
                <button className="button blue" onClick={onLogin}>Submit</button>
                <Link to='/'>Create an account</Link>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { login, clearError, clearMsg })(Login);