import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  fixedSideBar: {
    zIndex: 10,
    left: 0,
    top: 48,
    bottom: 0,
    overflowY: 'auto',
    position: 'fixed',
    overflowX: 'hidden',
    boxShadow: 'inset 0 0 5px #afacac',
    transition: '.5s ease-in-out',
    backgroundColor: theme.palette.backgroundColor.main,
  },
  container: {
    minWidth: 250,
  },
  fixSidebarPlaceholder: {
    width: 60,
    height: 'calc(100vh - 48px)',
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [sideBarDom, setSideBarDom] = useState({
    isMouseEnter: false,
    isSelected: false,
  });

  const onMEnterOut = () => {
    setSideBarDom({ ...sideBarDom, isMouseEnter: !sideBarDom.isMouseEnter });
  };

  const { isMouseEnter, isSelected } = sideBarDom;

  return (
    <Fragment>
      <div
        className={classes.fixedSideBar}
        onMouseEnter={onMEnterOut}
        onMouseLeave={onMEnterOut}
        style={{ maxWidth: isMouseEnter || isSelected ? '500px' : '60px' }}
      >
        <ListItem>
          <img
            style={{ borderRadius: '3px', marginTop: '16px' }}
            width="35"
            height="35"
            src="https://precitaste.atlassian.net/wiki/images/logo/default-space-logo-256.png"
            alt="icon"
          />
        </ListItem>
        <div className={classes.container}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
            <ListItem button key={`tex${index}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={`test demo ${index}`} />
            </ListItem>
          ))}
        </div>
      </div>
      <div className={classes.fixSidebarPlaceholder} />
    </Fragment>
  );
}
