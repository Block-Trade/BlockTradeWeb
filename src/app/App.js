import React, { Component, useEffect, useState } from 'react';
import { withRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';

const store = configureStore();

if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = (props) => {
  const [state, setState] = useState({
    isFullPageLayout: false
  });

  let navbarComponent;
  let sidebarComponent;
  let footerComponent;
  useEffect(() => {
    onRouteChanged();
    navbarComponent = !state.isFullPageLayout ? <Navbar /> : '';
    sidebarComponent = !state.isFullPageLayout ? <Sidebar /> : '';
    footerComponent = !state.isFullPageLayout ? <Footer /> : '';
  }, [props.history.location.pathname]);

  

  const onRouteChanged = () => {
    console.log('ROUTE CHANGED');
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      '/user-pages/login-1',
      '/user-pages/register-1',
      '/activate',
      '/user-pages/lockscreen',
      '/error-pages/error-404',
      '/error-pages/error-500',
      '/general-pages/landing-page',
      '/user-pages/company-info',
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else if (props.location.pathname.split('/')[1] === 'activate') {
        setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else {
        setState({
          isFullPageLayout: false,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.remove('full-page-wrapper');
      }
    }
  };
  /*
  componentDidUpdate(prevProps) {
     if (this.props.location.pathname !== prevProps.location.pathname) {
       this.onRouteChanged();
    }
  }
*/
  return (
    <div id='block-trade'>
      <Provider store={store}>
        <div className='container-scroller'>
          {!state.isFullPageLayout&& <Navbar />}
          <div className='container-fluid page-body-wrapper'>
            {!state.isFullPageLayout&&<Sidebar />}
            <div className='main-panel'>
              <div className='content-wrapper'>
                <AppRoutes />
              </div>
              {!state.isFullPageLayout&& <Footer />}
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default withRouter(App);
