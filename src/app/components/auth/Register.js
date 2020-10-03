import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signup, clearError, clearMsg } from '../../actions/auth';
//import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

const Register = ({auth: {msg, error}, signup, clearError, clearMsg}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            username,
            email,
            password
        }
        signup(formData);
    }

/*    useEffect(() => {
        if(msg!=='') {
            M.toast({html: 'Mail sent successfully', classes:'rounded blue'});
            clearMsg();
        }
    },[msg]);

    useEffect(() => {
        if(error!==null) {
            M.toast({html: error, classes:'rounded red'});
            clearError();
        }
    },[error]);
*/
    return (
        <div>

            <div className="bg-img" style={{marginTop:5}}></div>
                <form className="container1" style={{textAlign:"center", paddingRight:30}}>
                    <h1>Sign Up</h1>
                    <div className="input-field">
                    <label htmlFor="name" style={{paddingLeft:10}}>Name</label>
                    <input required style={{border: "1px solid #ccc", borderRadius:8, fontSize:15, paddingLeft:10}} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-field">
                    <label htmlFor="email" style={{paddingLeft:10}}>Email</label>
                    <input required style={{border: "1px solid #ccc", borderRadius:8, fontSize:15, paddingLeft:10}} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-field">
                    <label htmlFor="username" style={{paddingLeft:10}}>Usename</label>
                    <input required style={{border: "1px solid #ccc", borderRadius:8, fontSize:15, paddingLeft:10}} id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="validate" />
                    </div>
                    <div className="input-field">
                    <label htmlFor="password" style={{paddingLeft:10}}>Password</label>
                    <input required style={{border: "1px solid #ccc", borderRadius:8, fontSize:15, paddingLeft:10}} id="password" type="password" value={password} onChange={(e) => setPass(e.target.value)} className="validate" />
                    </div>
                    <button onClick={onSubmit} style={{border: "1px solid #ccc", borderRadius:8}} type="submit" className="btn1">Submit</button>
                    <p><Link to='/login'>Already have an account? Login here</Link></p>
                </form>
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { signup, clearError, clearMsg })(Register);
