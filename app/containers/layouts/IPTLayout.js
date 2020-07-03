import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.backgroundColor.light,
    paddingTop: theme.spacing(11),
    maxHeight: '100vh',
    overflow: 'hidden auto',
    // minWidth: 1400,
  },
  container: {
    width: 'calc( 100% - 60px )',
    display: 'flex',
    flexDirection: 'column',
  },
  fullContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
/**
 * IPTLayout will render sidenav, header and children(content component) in a specific structure
 */
// { sidebar, header, children }
// function IPTLayout() {
function IPTLayout({ sidebar, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sidebar}
      <div
        className={clsx({
          [classes.container]: !!sidebar,
          [classes.fullContainer]: !sidebar,
        })}
      >
        {children}
      </div>
    </div>
  );
}

IPTLayout.propTypes = {
  /** Data to be rendered inside the container */
  children: PropTypes.node.isRequired,
  /** Data to be rendered inside the sidebar */
  sidebar: PropTypes.node.isRequired,
  /** Data to be rendered inside the header */
};

// export default IPTLayout;
export default IPTLayout;
