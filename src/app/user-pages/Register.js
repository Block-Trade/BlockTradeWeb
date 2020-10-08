import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, clearError, clearMsg } from '../actions/auth';
import { Toast } from 'react-bootstrap';

const Register = ({ auth: { msg, error }, signup, clearError, clearMsg }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name == '' || username == '' || password == '' || email == '') {
      alert('Please fill all the fields');
    } else {
      const formData = {
        name,
        username,
        email,
        password,
      };
      await signup(formData);
      if (error) {
      }
      //setShow(true);
      //clearError();
      //clearMsg();
      //setTimeout(setShow(false),3000);
    }
    //setShow(false);
  };
  return (
    <div>
      <div className='d-flex align-items-center auth px-0'>
        <div className='row w-100 mx-0'>
          <div className='col-lg-4 mx-auto'>
            <div className='auth-form-light text-left py-5 px-4 px-sm-5'>
              <div className='brand-logo'>
                <img
                  style={{ display: 'block', margin: 'auto' }}
                  src={require('../../assets/images/712160ae-335c-4b6d-90d6-4c818afb16b2.jpeg')}
                  alt='logo'
                />
              </div>
              <h4>New here?</h4>
              <h6 className='font-weight-light'>
                Signing up is easy. It only takes a few steps
              </h6>
              <form className='pt-3'>
                <div className='form-group'>
                  <input
                    required={true}
                    type='text'
                    value={name}
                    className='form-control form-control-lg'
                    id='exampleInputUsername1'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    required={true}
                    type='email'
                    className='form-control form-control-lg'
                    id='exampleInputEmail1'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    required={true}
                    type='text'
                    value={username}
                    className='form-control form-control-lg'
                    id='exampleInputUsername1'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='form-control form-control-lg'
                    id='exampleFormControlSelect2'
                  >
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    className='form-control form-control-lg'
                    id='exampleInputPassword1'
                    placeholder='Password'
                    required={true}
                  />
                </div>
                <div className='mb-4'>
                  <div className='form-check'>
                    <label className='form-check-label text-muted'>
                      <input
                        required={true}
                        type='checkbox'
                        className='form-check-input'
                      />
                      <i className='input-helper'></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div>
                <div className='mt-3'>
                  <button
                    onClick={onSubmit}
                    className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
                  >
                    SIGN UP
                  </button>
                </div>
                <div className='text-center mt-4 font-weight-light'>
                  Already have an account?{' '}
                  <Link to='/user-pages/login' className='text-primary'>
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { signup, clearError, clearMsg })(
  Register
);
