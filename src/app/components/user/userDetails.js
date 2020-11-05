import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'shards-react';
import {
  getUserId,
  filterName,
  setImpId,
  clearFilter,
} from '../../actions/tradeDeal';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
const UserDetails = ({
  auth,
  location,
  getUserId,
  filterName,
  setImpId,
  clearFilter,
  history,
}) => (
  <Card small className='mb-4 pt-3'>
    <CardHeader className='border-bottom text-center'>
      <div className='mb-3 mx-auto'>
        <img
          className='rounded-circle'
          src={auth.user.avatar}
          alt={auth.user.name}
          width='110'
        />
      </div>
      <h4 className='mb-0'>{auth.user.username}</h4>
      <span className='text-muted d-block mb-2'>{auth.user.companyName}</span>
      <span className='text-muted d-block mb-2'>
        {auth.user.city} , {auth.user.country}
      </span>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className='px-4'>
        <div className='progress-wrapper'>
          <strong className='text-muted d-block mb-2'>
            {auth.user.address}
          </strong>
        </div>
      </ListGroupItem>
      <ListGroupItem className='p-4'>
        <strong className='text-muted d-block mb-2'>
          {auth.user.mobileNo}
        </strong>
        <span>{auth.user.companyAddress}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

UserDetails.defaultProps = {
  userDetails: {
    name: 'Sierra Brooks',
    avatar: require('../../../assets/images/circle-cropped.png'),
    jobTitle: 'Project Manager',
    performanceReportTitle: 'Workload',
    performanceReportValue: 74,
    metaTitle: 'Description',
    metaValue:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?',
  },
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(
  connect(mapStateToProps, { getUserId, filterName, setImpId, clearFilter })(
    UserDetails
  )
);
