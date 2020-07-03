import React from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Hidden } from '@material-ui/core';
import Login from './components/Login';
import Logout from './components/Logout';
import SessionExpired from './components/SessionExpired';
// import loginImageMd from '../../images/buns.png';
// import Signout from './scenes/Signout';
// import SessionExpired from './scenes/SessionExpired';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    height: '100vh',
  },
  imageArea: {
    background: `url(${loginImageMd}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'left bottom',
  },
  mainWrapper: {
    height: '100%',
  },
  mainContainer: {
    // width: '100vw',
    maxWidth: '100vw',
    padding: '0',
  },
  loginArea: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#000',
  },
  formHeaders: {
    minHeight: '40%',
    padding: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

function Auth({
  //   token,
  match,
  //   succesRoute,
  //   logoPath,
  //   loginImageSm,
  //   loginImageMd,
  //   logedIn,
  //   languageList,
  //   isRememberMeChecked,
  //   rememberMe
}) {
  const classes = useStyles();

  //   if (token) {
  //     return <Redirect to={succesRoute} />;
  //   }

  return (
    <Container className={classes.mainContainer}>
      <div className={classes.root}>
        <Grid container className={classes.mainWrapper} direction="row">
          <Hidden smDown>
            <Grid item xs={12} md={7} className={classes.imageArea}>
              <section className={classes.loginArea} />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={5}>
            <section className={classes.loginArea}>
              <Switch>
                {/* <Redirect exact from="/" to="/login" /> */}
                <Route
                  exact
                  path="/login"
                  render={props => (
                    <Login
                    //   {...props}
                    //   succesRoute={succesRoute}
                    //   logedIn={logedIn}
                    //   loginImageSm={loginImageSm}
                    //   logoPath={logoPath}
                    //   languageList={languageList}
                    //   isRememberMeChecked={isRememberMeChecked}
                    //   rememberMe={rememberMe}
                    />
                  )}
                />
                <Route
                  exact
                  path="/logout"
                  render={props => (
                    <Logout
                    //   {...props}
                    //   logoPath={logoPath}
                    //   loginImageSm={loginImageSm}
                    />
                  )}
                />
                <Route
                  exact
                  path="/sessionexpired"
                  render={props => (
                    <SessionExpired
                    //   {...props}
                    //   logoPath={logoPath}
                    //   loginImageSm={loginImageSm}
                    />
                  )}
                />
                <Redirect from="/" to="/login" />
              </Switch>
            </section>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default withRouter(Auth);
