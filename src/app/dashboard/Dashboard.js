import React, { useEffect } from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';

const Dashboard = ({ loadUser, auth }) => {
  useEffect(() => {
    if (localStorage.token && !auth.user) {
      loadUser();
    }
  }, []);
  return (
    <div>
      <div className='row'>
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
          <div className='card card-statistics'>
            <div className='card-body'>
              <div className='clearfix'>
                <div className='float-left'>
                  <i className='mdi mdi-cube text-danger icon-lg'></i>
                </div>
                <div className='float-right'>
                  <p className='mb-0 text-right text-dark'>Total Revenue</p>
                  <div className='fluid-container'>
                    <h3 className='font-weight-medium text-right mb-0 text-dark'>
                      $65,650
                    </h3>
                  </div>
                </div>
              </div>
              <p className='text-muted mt-3 mb-0'>
                <i
                  className='mdi mdi-alert-octagon mr-1'
                  aria-hidden='true'
                ></i>{' '}
                65% lower growth{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
          <div className='card card-statistics'>
            <div className='card-body'>
              <div className='clearfix'>
                <div className='float-left'>
                  <i className='mdi mdi-receipt text-warning icon-lg'></i>
                </div>
                <div className='float-right'>
                  <p className='mb-0 text-right text-dark'>Orders</p>
                  <div className='fluid-container'>
                    <h3 className='font-weight-medium text-right mb-0 text-dark'>
                      3455
                    </h3>
                  </div>
                </div>
              </div>
              <p className='text-muted mt-3 mb-0'>
                <i
                  className='mdi mdi-bookmark-outline mr-1'
                  aria-hidden='true'
                ></i>{' '}
                Product-wise sales{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
          <div className='card card-statistics'>
            <div className='card-body'>
              <div className='clearfix'>
                <div className='float-left'>
                  <i className='mdi mdi-poll-box text-success icon-lg'></i>
                </div>
                <div className='float-right'>
                  <p className='mb-0 text-right text-dark'>Sales</p>
                  <div className='fluid-container'>
                    <h3 className='font-weight-medium text-right mb-0 text-dark'>
                      5693
                    </h3>
                  </div>
                </div>
              </div>
              <p className='text-muted mt-3 mb-0'>
                <i className='mdi mdi-calendar mr-1' aria-hidden='true'></i>{' '}
                Weekly Sales{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card'>
          <div className='card card-statistics'>
            <div className='card-body'>
              <div className='clearfix'>
                <div className='float-left'>
                  <i className='mdi mdi-account-box-multiple text-info icon-lg'></i>
                </div>
                <div className='float-right'>
                  <p className='mb-0 text-right text-dark'>Employees</p>
                  <div className='fluid-container'>
                    <h3 className='font-weight-medium text-right mb-0 text-dark'>
                      246
                    </h3>
                  </div>
                </div>
              </div>
              <p className='text-muted mt-3 mb-0'>
                <i className='mdi mdi-reload mr-1' aria-hidden='true'></i>{' '}
                Product-wise sales{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-4 col-lg-12 col-sm-12 grid-margin stretch-card'>
          <div className='row flex-grow'>
            <div className='col-xl-12 col-lg-6 col-sm-6 grid-margin-0 grid-margin-xl stretch-card'>
              <div className='card card-revenue'>
                <div className='card-body'>
                  <div className='d-flex w-100 h-100 justify-content-between align-items-center'>
                    <div className='mr-auto'>
                      <p className='highlight-text text-white'> $168.90 </p>
                      <p className='text-white'> This Month </p>
                      <div className='badge badge-pill'> 18% </div>
                    </div>
                    <div className='ml-auto mt-2 mt-xl-0'>
                      <Sparklines
                        data={[4, 3, 10, 9, 4, 3, 8, 6, 7, 8]}
                        style={{ width: '110px', height: '70px' }}
                      >
                        <SparklinesBars barWidth={4} style={{ fill: '#fff' }} />
                      </Sparklines>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-12 col-lg-6 col-sm-6 stretch-card'>
              <div className='card card-revenue-table mt-4 mt-sm-0 mt-xl-4'>
                <div className='card-body'>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Member Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Average Weekly Profit{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-secondary'> +168.900 </p>
                    </div>
                  </div>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Total Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Weekly Customer Orders{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-primary'> +6890.00 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-lg-12 col-sm-12 grid-margin stretch-card'>
          <div className='row flex-grow'>
            <div className='col-xl-12 col-lg-6 col-sm-6 grid-margin-0 grid-margin-xl stretch-card'>
              <div className='card card-revenue'>
                <div className='card-body'>
                  <div className='d-flex w-100 h-100 justify-content-between align-items-center'>
                    <div className='mr-auto'>
                      <p className='highlight-text text-white'> $168.90 </p>
                      <p className='text-white'> This Month </p>
                      <div className='badge badge-pill'> 18% </div>
                    </div>
                    <div className='ml-auto mt-2 mt-xl-0'>
                      <Sparklines
                        data={[4, 3, 10, 9, 4, 3, 8, 6, 7, 8]}
                        style={{ width: '110px', height: '70px' }}
                      >
                        <SparklinesBars barWidth={4} style={{ fill: '#fff' }} />
                      </Sparklines>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-12 col-lg-6 col-sm-6 stretch-card'>
              <div className='card card-revenue-table mt-4 mt-sm-0 mt-xl-4'>
                <div className='card-body'>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Member Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Average Weekly Profit{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-secondary'> +168.900 </p>
                    </div>
                  </div>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Total Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Weekly Customer Orders{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-primary'> +6890.00 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-lg-12 col-sm-12 grid-margin stretch-card'>
          <div className='row flex-grow'>
            <div className='col-xl-12 col-lg-6 col-sm-6 grid-margin-0 grid-margin-xl stretch-card'>
              <div className='card card-revenue'>
                <div className='card-body'>
                  <div className='d-flex w-100 h-100 justify-content-between align-items-center'>
                    <div className='mr-auto'>
                      <p className='highlight-text text-white'> $168.90 </p>
                      <p className='text-white'> This Month </p>
                      <div className='badge badge-pill'> 18% </div>
                    </div>
                    <div className='ml-auto mt-2 mt-xl-0'>
                      <Sparklines
                        data={[4, 3, 10, 9, 4, 3, 8, 6, 7, 8]}
                        style={{ width: '110px', height: '70px' }}
                      >
                        <SparklinesBars barWidth={4} style={{ fill: '#fff' }} />
                      </Sparklines>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-12 col-lg-6 col-sm-6 stretch-card'>
              <div className='card card-revenue-table mt-4 mt-sm-0 mt-xl-4'>
                <div className='card-body'>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Member Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Average Weekly Profit{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-secondary'> +168.900 </p>
                    </div>
                  </div>
                  <div className='revenue-item d-flex'>
                    <div className='revenue-desc'>
                      <h6>Total Profit</h6>
                      <p className='font-weight-light'>
                        {' '}
                        Weekly Customer Orders{' '}
                      </p>
                    </div>
                    <div className='revenue-amount'>
                      <p className='text-primary'> +6890.00 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title mb-4'>Manage Tickets</h5>
              <div className='fluid-container'>
                <div className='row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3'>
                  <div className='col-md-1'>
                    <img
                      className='img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto'
                      src={require('../../assets/images/faces/face1.jpg')}
                      alt='profile'
                    />{' '}
                  </div>
                  <div className='ticket-details col-md-9'>
                    <div className='d-lg-flex'>
                      <p className='text-dark font-weight-semibold mr-2 mb-0 no-wrap'>
                        James :
                      </p>
                      <p className='text-primary mr-1 mb-0'>[#23047]</p>
                      <p className='mb-0 ellipsis'>
                        Donec rutrum congue leo eget malesuada.
                      </p>
                    </div>
                    <p className='text-gray ellipsis mb-2'>
                      Donec rutrum congue leo eget malesuada. Quisque velit
                      nisi, pretium ut lacinia in, elementum id enim vivamus.{' '}
                    </p>
                    <div className='row text-gray d-md-flex d-none'>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted text-muted'>
                          Last responded :
                        </small>
                        <small className='Last-responded mr-2 mb-0 text-muted text-muted'>
                          3 hours ago
                        </small>
                      </div>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted text-muted'>
                          Due in :
                        </small>
                        <small className='Last-responded mr-2 mb-0 text-muted text-muted'>
                          2 Days
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='ticket-actions col-md-2'>
                    <div className='btn-group dropdown'>
                      <Dropdown>
                        <Dropdown.Toggle className='btn btn-success btn-sm'>
                          Manage
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='navbar-dropdown preview-list'>
                          <Dropdown.Item>Quick reply</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Resolve Issue</Dropdown.Item>
                          <Dropdown.Item>Close Issue</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className='row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3'>
                  <div className='col-md-1'>
                    <img
                      className='img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto'
                      src={require('../../assets/images/faces/face2.jpg')}
                      alt='profile'
                    />{' '}
                  </div>
                  <div className='ticket-details col-md-9'>
                    <div className='d-lg-flex'>
                      <p className='text-dark font-weight-semibold mr-2 mb-0 no-wrap'>
                        Stella :
                      </p>
                      <p className='text-primary mr-1 mb-0'>[#23135]</p>
                      <p className='mb-0 ellipsis'>
                        Curabitur aliquet quam id dui posuere blandit.
                      </p>
                    </div>
                    <p className='text-gray ellipsis mb-2'>
                      Pellentesque in ipsum id orci porta dapibus. Sed porttitor
                      lectus nibh. Curabitur non nulla sit amet nisl.{' '}
                    </p>
                    <div className='row text-gray d-md-flex d-none'>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted'>
                          Last responded :
                        </small>
                        <small className='Last-responded mr-2 mb-0 text-muted'>
                          3 hours ago
                        </small>
                      </div>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted'>Due in :</small>
                        <small className='Last-responded mr-2 mb-0 text-muted'>
                          2 Days
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='ticket-actions col-md-2'>
                    <div className='btn-group dropdown'>
                      <Dropdown>
                        <Dropdown.Toggle className='btn btn-success btn-sm'>
                          Manage
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='navbar-dropdown preview-list'>
                          <Dropdown.Item>Quick reply</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Resolve Issue</Dropdown.Item>
                          <Dropdown.Item>Close Issue</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className='row ticket-card mt-3'>
                  <div className='col-md-1'>
                    <img
                      className='img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto'
                      src={require('../../assets/images/faces/face3.jpg')}
                      alt='profile'
                    />{' '}
                  </div>
                  <div className='ticket-details col-md-9'>
                    <div className='d-lg-flex'>
                      <p className='text-dark font-weight-semibold mr-2 mb-0 no-wrap'>
                        John Doe :
                      </p>
                      <p className='text-primary mr-1 mb-0'>[#23246]</p>
                      <p className='mb-0 ellipsis'>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar.
                      </p>
                    </div>
                    <p className='text-gray ellipsis mb-2'>
                      Nulla quis lorem ut libero malesuada feugiat. Proin eget
                      tortor risus. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='row text-gray d-md-flex d-none'>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted'>
                          Last responded :
                        </small>
                        <small className='Last-responded mr-2 mb-0 text-muted'>
                          3 hours ago
                        </small>
                      </div>
                      <div className='col-4 d-flex'>
                        <small className='mb-0 mr-2 text-muted'>Due in :</small>
                        <small className='Last-responded mr-2 mb-0 text-muted'>
                          2 Days
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='ticket-actions col-md-2'>
                    <div className='btn-group dropdown'>
                      <Dropdown>
                        <Dropdown.Toggle className='btn btn-success dropdown-toggle btn-sm'>
                          Manage
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='navbar-dropdown preview-list'>
                          <Dropdown.Item>Quick reply</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Resolve Issue</Dropdown.Item>
                          <Dropdown.Item>Close Issue</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps, { loadUser })(Dashboard);
