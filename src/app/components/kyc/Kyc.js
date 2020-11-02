import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { kycDl, kycPass } from '../../actions/kyc';
import { Card, Button, Form } from 'react-bootstrap';
import { loadUser } from '../../actions/auth';

const Kyc = ({ kycDl, kycPass, kyc, history,loadUser }) => {
  const [meth, setMeth] = useState('');
  const [toggler, setToggler] = useState(false);
  const [no, setNo] = useState('');
  const [cc, setCc] = useState('');
  useEffect(() => {
    if (kyc.kycStatus === true) {
      history.push('/dashboard');
    }
  }, [history, kyc.kycStatus]);

  useEffect(() => {
    loadUser();
    
  },[]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (cc === '' || no === '') {
      alert('Please fill all fields');
    } else {
      if (meth === 'dl') {
        const formData = {
          dl_no: no,
          cc,
        };
        kycDl(formData);
      } else {
        const formData = {
          passport_no: no,
          cc,
        };
        kycPass(formData);
      }
    }
  };
  return (
    <div style={{ backgroundColor: '#2853C3', textAlign: 'center' }}>
      {kyc.msg && <p>{kyc.msg}</p>}
      <Card style={{ width: '40rem', margin: 'auto' }} className='text-center'>
        <Card.Img variant='top' src='/kycPend.gif' alt='image' />
        {!toggler && (
          <Card.Body style={{ backgroundColor: '#2853C3' }}>
            <Button
              variant='light outline-dark'
              size='lg'
              onClick={(e) => {
                e.preventDefault();
                setMeth('dl');
                setToggler(true);
              }}
            >
              Kyc using DL
            </Button>
            <hr style={{ backgroundColor: 'white' }}></hr>
            <Button
              variant='light outline-dark'
              size='lg'
              onClick={(e) => {
                e.preventDefault();
                setMeth('pass');
                setToggler(true);
              }}
            >
              Kyc using passport
            </Button>
          </Card.Body>
        )}
        {toggler && (
          <Card.Body style={{ backgroundColor: '#2853C3' }}>
            <Form className='pt-3'>
              <Form.Group className='d-flex search-field'>
                <select
                  className='form-control form-control-sm'
                  id='exampleFormControlSelect2'
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                >
                  <option value=''>Country code</option>
                  <option value='AU'>AU</option>
                  <option value='AG'>AG</option>
                  <option value='IN'>IN</option>
                  <option value='BG'>BG</option>
                  <option value='AS'>AS</option>
                  <option value='CO'>CO</option>
                  <option value='CA'>CA</option>
                </select>
              </Form.Group>
              <Form.Group className='d-flex search-field'>
                <Form.Control
                  type='text'
                  placeholder={
                    meth == 'dl' ? 'Driving License No.' : 'Passport No.'
                  }
                  size='lg'
                  className='h-auto'
                  value={no}
                  onChange={(e) => setNo(e.target.value)}
                />
              </Form.Group>

              <div className='mt-3'>
                <Button variant='light' size='lg' onClick={onSubmit}>
                  Verify
                </Button>
              </div>
            </Form>
          </Card.Body>
        )}
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  kyc: state.kyc,
});
export default connect(mapStateToProps, { kycDl, kycPass,loadUser })(Kyc);
