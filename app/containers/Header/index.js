/* eslint-disable indent */
/*
 * Header
 */
import React, { useEffect, useState, memo, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import CustomSVG from '../../icons/CustomSVG';
import hotIcon from '../../images/hotIcon.png';
import { PopoverDropdown, MenuButton, ActionTabs } from './assets';
// import { ShortcutList } from '../global';
import * as actions from '../App/actions';
const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  toolBar: {
    background: theme.palette.backgroundColor.main,
    minHeight: theme.spacing(11),
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0, 4),
  },
  header: {
    boxShadow: '0px 3px 6px rgba(85,85,85,.09);',
  },
  title: {
    marginRight: theme.spacing(14),
    marginLeft: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      marginRight: theme.spacing(3),
    },
    '& > b': {
      fontSize: 16,
      letterSpacing: 0.8,
    },
  },
  headerLeft: {
    color: theme.palette.text.main,
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
  },
  headerCenter: {
    position: 'absolute',
    transform: 'translateX(-50%)',
    left: '50%',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  pageName: {
    ...theme.typography.h4,
    color: theme.palette.text.light,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: 'transparent',
    color: theme.palette.text.light,
    cursor: 'pointer',
    marginLeft: theme.spacing(4),
  },
}));

export function Header(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [dialogOpen, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [actionClassName, setActionClassName] = React.useState(null);
  const [menuOptions, setMenuOptions] = React.useState({});
  const [tabVal, setTabVal] = React.useState();
  const [action, setAction] = React.useState();

  const setNav = (newValue, route) => {
    setTabVal(newValue);
    props.history.push(`/${route}`);
    // switch (newValue) {
    //   case 0:
    //     props.history.push('/image-labelling');
    //     break;
    //   case 1:
    //     props.history.push('/tasks');
    //     break;
    //   default:
    //     return true;
    // }
  };

  // const handleClick = (event, evenName) => {
  //   setActionClassName(evenName);
  //   setAnchorEl(event.currentTarget);
  // };
  const topLeftMenu = {
    options: ['text,text,text'],
    image: true,
    recent: true,
  };
  const questionMenu = {
    // options: ['Shortcut', 'Traning', 'Feedback'],
    options: ['Shortcut'],
    image: false,
    recent: false,
  };
  const userMenu = {
    options: ['Logout'],
    image: false,
    recent: false,
  };
  const handleClick = (event, evenName) => {
    setActionClassName(evenName);
    setAnchorEl(event.currentTarget);
    if (evenName === 'userDrop') {
      setMenuOptions(userMenu);
    } else if (evenName === 'qestionDrop') {
      setMenuOptions(questionMenu);
    } else {
      setMenuOptions(topLeftMenu);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // For todays date;
  Date.prototype.today = function() {
    return `${(this.getDate() < 10 ? '0' : '') + this.getDate()}-${
      this.getMonth() + 1 < 10 ? '0' : ''
    }${this.getMonth() + 1}-${this.getFullYear()}`;
  };

  // For the time now
  Date.prototype.timeNow = function() {
    return `${(this.getHours() < 10 ? '0' : '') + this.getHours()}:${
      this.getMinutes() < 10 ? '0' : ''
    }${this.getMinutes()}`;
  };
  const [curTime, setCurTime] = useState();
  useEffect(() => {
    setCurTime(new Date().timeNow());
    const interval = setInterval(function() {
      setCurTime(new Date().timeNow());
    }, 60000);
  }, []);

  let dialogJsx = null;
  if (action === 'Logout') {
    new Promise((resolve, reject) => {
      props.doLogout(resolve);
    }).then(() => {
      props.history.push('/logout');
    });
  } else {
    // dialogJsx = <ShortcutList open={dialogOpen} setOpen={setOpen} />;
  }

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar classes={{ root: classes.toolBar }}>
          <div className={classes.headerLeft}>
            {/* <MenuButton handleClick={e => handleClick(e, 'menuDrop')} /> */}
            <MenuButton />
            <Typography variant="h3" className={classes.title}>
              <img src={hotIcon} alt="icon" /> <b> Tool</b>
            </Typography>
            <ActionTabs
              tabVal={tabVal}
              setNav={setNav}
              // handleClick={e => handleClick(e, 'tabDrop')}
            />
          </div>
          <div className={classes.headerCenter}>
            <Typography
              className={classes.pageName}
              variant="h4"
              color="inherit"
              align="center"
            >
              {curTime} | {new Date().today()}
            </Typography>
          </div>
          <div className={classes.headerRight}>
            <CustomSVG
              name="question"
              height="31"
              width="31"
              fill="#9a9a9a"
              onClick={e => handleClick(e, 'qestionDrop')}
              className={classes.question}
            />
            <Avatar alt="user" src="" className={classes.avatar}>
              <CustomSVG
                name="avatar"
                height="31"
                width="31"
                fill="currentColor"
                onClick={e => handleClick(e, 'userDrop')}
              />
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
      <PopoverDropdown
        setOpen={setOpen}
        options={menuOptions}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        hotIcon={hotIcon}
        custonClassName={actionClassName}
        setAction={setAction}
      />
      {dialogJsx}
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  // authdata: makeSelectAuthData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doLogout: resolve => dispatch(actions.doLogout(resolve)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withRouter,
)(Header);
