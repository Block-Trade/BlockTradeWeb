import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from 'shards-react';
import { loadUser } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { editProfile } from '../../actions/profile';

const UserAccountDetails = ({ loadUser, auth, editProfile }) => {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyTelNo, setCompanyTelNo] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const handleEdit = () => {
    setDisabled(!disabled);
  };
  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if(auth.user){
      setName(auth.user.name);
      setMobileNo(auth.user.mobileNo);
      setCity(auth.user.city);
      setCountry(auth.user.country);
      setCompanyAddress(auth.user.companyAddress);
      setCompanyEmail(auth.user.companyEmail);
      setCompanyTelNo(auth.user.companyTelNo);
    }
  },[auth.user]);

  const handleSubmit = () => {
    const profile = {
      name,mobileNo,city,country,companyAddress,companyEmail,companyTelNo
    };
    editProfile({profile});
    
  };
  return (
    <Fragment>
      {auth.user && (
        <Card small className='mb-4'>
          <CardHeader className='border-bottom'>
            <div>
              <h6 className='m-0' style={{ display: 'inline-block' }}>
                Account Details
              </h6>
              {disabled && (
                <IconButton
                  color='primary'
                  aria-label='add to shopping cart'
                  style={{ display: 'inline-block' }}
                  onClick={handleEdit}
                >
                  <EditIcon />
                </IconButton>
              )}
            </div>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className='p-3'>
              <Row>
                <Col>
                  <Form>
                    <Row form>
                      {/* First Name */}
                      <Col md='6' className='form-group'>
                        <label htmlFor='feName'>Name</label>
                        <FormInput
                          id='feName'
                          placeholder='Name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                      {/* Last Name */}
                      <Col md='6' className='form-group'>
                        <label htmlFor='feMobileNo'>Mobile No</label>
                        <FormInput
                          id='feMobileNo'
                          placeholder='MobileNo'
                          value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Email */}
                      <Col md='6' className='form-group'>
                        <label htmlFor='feCity'>City</label>
                        <FormInput
                          type='text'
                          id='feCity'
                          placeholder='City'
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                      {/* Password */}
                      <Col md='6' className='form-group'>
                        <label htmlFor='feCountry'>Country</label>
                        <FormInput
                          type='text'
                          id='feCountry'
                          placeholder='Country'
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      <Col md='6' className='form-group'>
                        <label htmlFor='feCompanyName'>Company Name</label>
                        <FormInput
                          type='text'
                          id='feCompanyName'
                          placeholder='Company Name'
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                      <Col md='6' className='form-group'>
                        <label htmlFor='feComapanyEmail'>Company Email</label>
                        <FormInput
                          type='email'
                          id='feCompanyEmail'
                          placeholder='CompanyEmail'
                          value={companyEmail}
                          onChange={(e) => setCompanyEmail(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                    </Row>
                    <Row form>
                      <Col md='6' className='form-group'>
                        <label htmlFor='feCompanyTelNo'>Company TelNo</label>
                        <FormInput
                          type='text'
                          id='feCompanyTelNo'
                          placeholder='Company TelNo'
                          value={companyTelNo}
                          onChange={(e) => setCompanyTelNo(e.target.value)}
                          disabled={disabled}
                        />
                      </Col>
                    </Row>
                    <FormGroup>
                      <label htmlFor='feCompanyAddress'>Company Address</label>
                      <FormTextarea
                        id='feCompanyAddress'
                        placeholder='Company Address'
                        value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                        disabled={disabled}
                        rows='3'
                      />
                    </FormGroup>
                    {!disabled && (
                      <div>
                        <Button
                          style={{
                            backgroundColor: '#ffffff',
                            display: 'inline-block',
                            color: '#000000',
                            marginRight: '1rem',
                          }}
                          onClick={handleEdit}
                        >
                          Cancel
                        </Button>
                        <Button
                          style={{
                            backgroundColor: '#007bff',
                            display: 'inline-block',
                          }}
                          onClick={handleSubmit}
                        >
                          Update Account
                        </Button>
                      </div>
                    )}
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
      )}
    </Fragment>
  );
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(
  connect(mapStateToProps, {
    loadUser,
    editProfile
  })(UserAccountDetails)
);
