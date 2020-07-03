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
    background: `url() no-repeat`,
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

function Auth() {
  const classes = useStyles();
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
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route
                  exact
                  path="/sessionexpired"
                  component={SessionExpired}
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
