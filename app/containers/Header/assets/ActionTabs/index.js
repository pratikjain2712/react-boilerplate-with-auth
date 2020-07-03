import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthData } from '../../../App/selectors';

const useStyles = makeStyles(theme => ({
  tabContainer: {
    minHeight: theme.spacing(9),
    '& > button': {
      marginRight: theme.spacing(4),
      '&[aria-selected="true"]': {
        color: theme.palette.menu.selection,
      },
      '&[aria-selected="false"]': {
        color: theme.palette.menu.unselected,
      },
    },
  },
  tabIndicator: {
    backgroundColor: '#ab521e',
  },
  tabDesign: {
    minWidth: theme.spacing(2),
  },
}));

function ActionTabs({ tabVal, setNav, handleClick, authdata }) {
  // useInjectSaga({ key: 'global', saga });

  const classes = useStyles();

  const a11yProps = index => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  let navs = ['tasks'];

  if (authdata.role !== 'Super Admin') {
    navs = ['image-labelling', 'tasks'];
  }

  const handleTabChange = (eve, newVal) => {
    setNav(newVal, navs[newVal]);
  };

  return (
    <Tabs
      value={tabVal}
      classes={{
        flexContainer: classes.tabContainer,
        indicator: classes.tabIndicator,
      }}
      onChange={handleTabChange}
    >
      {authdata && authdata.role !== 'Super Admin' && (
        <Tab
          className={classes.tabCss}
          classes={{ root: classes.tabDesign }}
          label="Image Labelling"
          textColor="primary"
          onClick={handleClick}
          {...a11yProps(0)}
          // aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
        />
      )}
      <Tab
        label="Tasks"
        {...a11yProps(1)}
        classes={{ root: classes.tabDesign }}
      />
    </Tabs>
  );
}

ActionTabs.propTypes = {
  tabVal: PropTypes.number,
  handleTabChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authdata: makeSelectAuthData(),
  // products: makeSelectProducts(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ActionTabs);
