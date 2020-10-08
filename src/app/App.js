import React, { Component } from 'react';
import { withRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
const store = configureStore();
class App extends Component {
  state = {};
  componentDidMount() {
    this.onRouteChanged();
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
    return (
      <div>
        <Provider store={store}>
          <div className='container-scroller'>
            {navbarComponent}
            <div className='container-fluid page-body-wrapper'>
              {sidebarComponent}
              <div className='main-panel'>
                <div className='content-wrapper'>
                  <AppRoutes />
                </div>
                {footerComponent}
              </div>
            </div>
          </div>
        </Provider>
      </div>
    );
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     this.onRouteChanged();
  //   }
  // }

  onRouteChanged() {
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
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else if (this.props.location.pathname.split('/')[1] === 'activate') {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.remove('full-page-wrapper');
      }
    }
  }
}

export default withRouter(App);
