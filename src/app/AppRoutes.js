import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import PrivateRouter from './routers/PrivateRouter';
import PublicRouter from './routers/PublicRouter';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const Error404 = lazy(() => import('./user-pages/Error404'));
const Error500 = lazy(() => import('./user-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const Setting = lazy(() => import('./components/settings/settings'));
const MyTrade = lazy(() => import('./components/mytrade/MyTrade'));
const MyWallet = lazy(() => import('./components/mywallet/MyWallet'));
const ActivateForm = lazy(() => import('./components/auth/Activate'));
const CompanyInfo = lazy(() => import('./user-pages/CompanyInfo'));
const Kyc = lazy(() => import('./components/kyc/Kyc'));
const Blankpage = lazy(() => import('./user-pages/BlankPages'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PrivateRouter exact path='/dashboard' component={Dashboard} />
        <PrivateRouter exact path='/settings' component={Setting} />
        <PrivateRouter exact path='/my-wallet' component={MyWallet} />
        <PrivateRouter exact path='/my-trade' component={MyTrade} />
        <PublicRouter
          path='/form-Elements/basic-elements'
          component={BasicElements}
        />

        <PublicRouter path='/user-pages/login-1' component={Login} />
        <PublicRouter path='/user-pages/register-1' component={Register1} />
        <PrivateRouter
          path='/user-pages/company-info'
          component={CompanyInfo}
        />
        <PrivateRouter path='/kyc' component={Kyc} />
        <PublicRouter path='/activate/:token' component={ActivateForm} />

        <PublicRouter path='/user-pages/error-404' component={Error404} />
        <PublicRouter path='/user-pages/error-500' component={Error500} />
        <PublicRouter path='/user-pages/blank-page' component={Blankpage} />
        <Redirect to='/dashboard' />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
