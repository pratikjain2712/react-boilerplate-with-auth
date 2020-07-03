import React, { Fragment } from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import { Logo } from 'components';

const useStyles = makeStyles(theme => ({
  loginHeader: () => ({
    padding: `10% 18% ${theme.spacing(0)}`,
    minHeight: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 7, 4),
      background: `url() no-repeat ${theme.palette.secondary.light}`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
    },
  }),
  loginTitle: {
    ...theme.typography.subtitle1,
    color: theme.palette.text.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      // color: theme.palette.text.white
    },
  },
  loginSubTitle: {
    ...theme.typography.subtitle2,
    marginTop: theme.spacing(2),
    color: theme.palette.text.extraLight,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      fontSize: theme.typography.fontSize,
      color: theme.palette.text.extraLight,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: `10% 18% ${theme.spacing(0)}`,
    backgroundColor: theme.palette.backgroundColor.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 7),
      height: '100%',
      maxHeight: '65%',
    },
  },
  LoginformButton: {
    marginTop: theme.spacing(10),
    width: '100%',
    padding: theme.spacing(2, 0),
    textTransform: 'capitalize',
    backgroundColor: theme.palette.button.primary.backgroundColor,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.button.primary.backgroundColor,
    },
    '& a': {
      ...theme.typography.button,
      color: `${theme.palette.button.primary.text} !important `,
      display: 'inline-block',
      width: '100%',
      textDecoration: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.fontSize,
      },
    },
  },
}));

export default function Signout() {
  const classes = useStyles();
  // const { t } = useTranslation();
  return (
    <Fragment>
      <div className={classes.container}>
        <Typography
          variant="h4"
          gutterBottom={false}
          className={classes.loginTitle}
          align="left"
        >
          Session Expired
        </Typography>
        <Typography variant="h6" className={classes.loginSubTitle} align="left">
          Dont Worry, you can login below.
        </Typography>
        <Button variant="contained" className={classes.LoginformButton}>
          <Link to="/">Log In</Link>
        </Button>
      </div>
    </Fragment>
  );
}
