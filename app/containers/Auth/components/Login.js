import React, { useState, Fragment, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import MuiAlert from '@material-ui/lab/Alert';
// import { useTranslation } from 'react-i18next';
import {
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Typography,
  Menu,
  MenuItem,
  Hidden,
  Snackbar,
  SnackbarContent,
  useMediaQuery,
} from '@material-ui/core';
// import { CustomSVG, Logo } from 'components';
import { makeStyles, useTheme } from '@material-ui/styles';
import * as actions from '../../App/actions';
// import { useInjectReducer } from 'utils/injectReducer';
// import reducer from '../../App/reducer';
// import socket from '../../../services/adapter';
// import { validateEmail } from '../../../utils/helper';
import { makeSelectAuthData } from '../../App/selectors';

const useStyles = makeStyles(theme => ({
  loginHeader: () => ({
    padding: `10% 16% ${theme.spacing(0)}`,
    minHeight: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 7, 4),
      background: `url() no-repeat ${theme.palette.secondary.light}`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      // height: '240px'
    },
  }),
  loginTitle: {
    ...theme.typography.subtitle1,
    // marginTop: 'auto',
    marginTop: '30%',
    color: theme.palette.text.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      color: theme.palette.text.white,
    },
  },
  loginSubTitle: {
    ...theme.typography.subtitle2,
    marginTop: theme.spacing(2),
    color: theme.palette.text.extraLight,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      fontSize: theme.typography.fontSize,
      color: theme.palette.text.white,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: `10% 16% ${theme.spacing(0)}`,
    // minHeight: '60%',
    height: 'calc(69% - 70px)',
    backgroundColor: theme.palette.backgroundColor.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 7, 0),
      height: 'auto%',
    },
  },
  textField: {
    margin: theme.spacing(0, 0, 6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(7),
    },
  },
  inputLabel: {
    ...theme.typography.h4,
    color: `${theme.palette.text.extraLight} !important `,
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h5,
    },
  },
  inputfield: {
    ...theme.typography.h3,
    color: theme.palette.text.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize,
    },
  },
  remembermeCheckboxLabelContainer: {
    textAlign: 'left',
    width: 'fit-content',
    marginTop: `-${theme.spacing(4)}px`,
  },
  remembermeCheckboxLabel: {
    ...theme.typography.h3,
    color: `${theme.palette.text.extraLight} !important `,
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h4,
    },
  },
  LoginformButton: {
    ...theme.typography.button,
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
    color: `${theme.palette.button.primary.text} !important `,
    backgroundColor: theme.palette.button.primary.backgroundColor,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.button.primary.backgroundColor,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      fontSize: theme.typography.fontSize,
    },
  },
  forgotPasswordbutton: {
    // visibility: 'hidden',
    ...theme.typography.h4,
    color: theme.palette.text.extraLight,
    cursor: 'not-allowed',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },
  languageButton: {
    ...theme.typography.h4,
    color: theme.palette.button.secondary.text,
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.button.secondary.border}`,
    textTransform: 'capitalize',
  },
  languageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  hidePassword: {
    cursor: 'pointer',
  },
  snackBarSuccess: {
    backgroundColor: theme.palette.utils.success,
  },
  snackBarInfo: {
    backgroundColor: theme.palette.utils.info,
  },
  snackBarError: {
    backgroundColor: theme.palette.utils.error,
  },
  snackBarWarning: {
    backgroundColor: theme.palette.utils.warning,
  },
  actionIcon: {
    margin: theme.spacing(1),
  },
  actionIconInfo: {
    position: 'absolute',
    left: '0px',
    margin: theme.spacing(0, 1, 0, 4),
  },
  dropdownIcon: {
    marginLeft: theme.spacing(2),
  },
  dropdownListLi: {
    ...theme.typography.h4,
    minHeight: '40px',
  },
  dropdownListIcon: {
    marginRight: theme.spacing(2),
  },
  copyright: {
    margin: `auto auto ${theme.spacing(0)} ${theme.spacing(0)}`,
    color: theme.palette.text.extraLight,
    ...theme.typography.h5,
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h5,
      margin: theme.spacing(3, 0),
    },
  },
  message: {
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2, 5, 2, 9),
  },
  alignRight: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
  },
  langPaper: {
    marginTop: 37,
  },
}));

const key = 'auth';

const Login = props => {
  // useInjectReducer({ key, reducer });
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  //   const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedLang, setSelectedLang] = useState();
  // languageList.find(l => l.id === i18n.language)
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisiblePass, setVisiblePass] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSnackBar, setSnackBar] = useState(false);
  const [errorMessageType, setErrorMessageType] = useState('snackBarInfo');
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  function Alert(other) {
    return <MuiAlert elevation={4} variant="filled" {...other} />;
  }

  useEffect(() => {
    if (email && isSubmitClicked) {
      //   if (!validateEmail(email)) {
      //     setIsErrorEmail(true);
      //   } else {
      //     setIsErrorEmail(false);
      //   }
    }
  }, [email, isSubmitClicked]);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const languageSelection = l => () => {
    i18n.changeLanguage(l.id);
    setSelectedLang(l);
    handleClose();
  };
  const handlePasswordVisiblity = () => {
    setVisiblePass(!isVisiblePass);
  };
  const submit = () => {
    // console.log(email, pass , rememberMe);
    new Promise((resolve, reject) => {
      props.doLogin(email, pass, rememberMe, resolve);
    }).then(() => {
      props.history.push('/');
    });
    // props.history.push('/');
  };

  const handleSnackBarClose = () => {
    setSnackBar(false);
  };
  const keyPress = e => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <Fragment>
      <header className={classes.loginHeader}>
        {/* <Hidden mdUp>
          <Logo md path={logoPath} className={classes.logo} />
        </Hidden>
        <Hidden smDown>
          <Logo lg path={logoPath} />
        </Hidden> */}
        <Typography
          variant="h4"
          gutterBottom={false}
          className={classes.loginTitle}
          align="left"
        >
          Welcome,
        </Typography>
        <Typography variant="h6" className={classes.loginSubTitle} align="left">
          Please login to your account
        </Typography>
      </header>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-email-input"
          label="Email Address"
          InputLabelProps={{ classes: { root: classes.inputLabel } }}
          className={classes.textField}
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
          margin="dense"
          InputProps={{
            classes: { inputMarginDense: classes.inputfield },
          }}
          error={isErrorEmail}
          onKeyPress={keyPress}
          helperText={
            isErrorEmail ? (
              <span className={classes.alignRight}>emailError</span>
            ) : (
              ''
            )
          }
        />
        <TextField
          id="standard-password-input"
          label="Password"
          required
          InputLabelProps={{ classes: { root: classes.inputLabel } }}
          className={classes.textField}
          margin="dense"
          type={isVisiblePass ? 'text' : 'password'}
          value={pass}
          onChange={e => setPass(e.target.value)}
          InputProps={{
            // endAdornment: (
            //   <CustomSVG
            //     name={isVisiblePass ? 'showPassword' : 'hidePassword'}
            //     fill={theme.palette.primary.dark}
            //     onClick={handlePasswordVisiblity}
            //     className={classes.hidePassword}
            //   />
            // ),
            classes: { inputMarginDense: classes.inputfield },
          }}
          onKeyPress={keyPress}
        />
        <FormControlLabel
          control={
            <Checkbox
              // defaultChecked={defaultChecked}
              checked={rememberMe}
              onChange={({ target: { checked } }) => setRememberMe(checked)}
              value="rememberMe"
              color="primary"
              className={classes.remembermeCheckbox}
            />
          }
          label="Remember Me"
          className={classes.remembermeCheckboxLabelContainer}
          classes={{ label: classes.remembermeCheckboxLabel }}
        />
        <Button
          onClick={submit}
          variant="contained"
          className={classes.LoginformButton}
        >
          Log In
        </Button>
        {typeof props.authData === 'string' && (
          <div style={{ marginTop: '30px' }}>
            <Alert severity="error">{props.authData}</Alert>
          </div>
        )}
      </form>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  authData: makeSelectAuthData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: (email, pass, rememberMe, resolve) =>
      dispatch(actions.doLogin(email, pass, rememberMe, resolve)),
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
)(Login);
