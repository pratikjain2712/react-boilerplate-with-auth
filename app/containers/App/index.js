/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment, memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import FeaturePage from '../FeaturePage/Loadable';
import HomePage from '../HomePage/Loadable';

// import NotFoundPage from /NotFoundPage/Loadable';
import Header from '../Header';
import Auth from '../Auth';
import saga from './saga';
import { makeSelectAuthData } from './selectors';
import * as actions from './actions';

// import Header from 'components/Header';

export function App(props) {
  useInjectSaga({ key: 'global', saga });

  useEffect(() => {
    props.checkAuthentication();
  }, []);

  if (localStorage.getItem('authData') && !props.authdata) {
    props.loginSuccess(JSON.parse(localStorage.getItem('authData')));
  }

  let routes;

  if (localStorage.getItem('authData')) {
    routes = (
      <Fragment>
        <Helmet titleTemplate="ML tools" defaultTitle="ML tools">
          <meta name="description" content="internal labelling tool" />
        </Helmet>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {props.authdata && props.authdata.role !== 'Super admin' && (
            <Route path="/features" component={FeaturePage} />
          )}
          <Route render={() => <Redirect to="/home" />} />
        </Switch>
      </Fragment>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    );
  }
  return routes;
}

const mapStateToProps = createStructuredSelector({
  authdata: makeSelectAuthData(),
  // products: makeSelectProducts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    checkAuthentication: () => dispatch(actions.checkAuthentication()),
    loginSuccess: data => dispatch(actions.loginSuccess(data)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
  memo,
)(App);
