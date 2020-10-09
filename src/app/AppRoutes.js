import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import PrivateRouter from './routers/PrivateRouter';
import PublicRouter from './routers/PublicRouter';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const BlankPage = lazy(() => import('./user-pages/BlankPage'));

const Setting = lazy(() => import('./components/settings/settings'));
const MyTrade = lazy(() => import('./components/mytrade/MyTrade'));
const MyWallet = lazy(() => import('./components/mywallet/MyWallet'));
const ActivateForm = lazy(() => import('./components/auth/Activate'));
const CompanyInfo = lazy(() => import('./user-pages/CompanyInfo'));
const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PrivateRouter exact path='/dashboard' component={Dashboard} />
        <PrivateRouter exact path='/settings' component={Setting} />
        <PrivateRouter exact path='/my-wallet' component={MyWallet} />
        <PrivateRouter exact path='/my-trade' component={MyTrade} />
        <PublicRouter path='/basic-ui/buttons' component={Buttons} />
        <PublicRouter path='/basic-ui/dropdowns' component={Dropdowns} />
        <PublicRouter path='/basic-ui/typography' component={Typography} />

        <PublicRouter
          path='/form-Elements/basic-elements'
          component={BasicElements}
        />

        <PublicRouter path='/tables/basic-table' component={BasicTable} />
        <PublicRouter path='/icons/font-awesome' component={FontAwesome} />
        <PublicRouter path='/charts/chart-js' component={ChartJs} />

        <PublicRouter path='/user-pages/login-1' component={Login} />
        <PublicRouter path='/user-pages/register-1' component={Register1} />
        <PrivateRouter
          path='/user-pages/company-info'
          component={CompanyInfo}
        />
        <PublicRouter path='/activate/:token' component={ActivateForm} />

        <PublicRouter path='/user-pages/error-404' component={Error404} />
        <PublicRouter path='/user-pages/error-500' component={Error500} />

        <PublicRouter path='/user-pages/blank-page' component={BlankPage} />

        <Redirect to='/dashboard' />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
