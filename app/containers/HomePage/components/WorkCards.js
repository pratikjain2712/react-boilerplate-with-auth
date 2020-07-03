import React from 'react';
import {
  Grid,
  Paper,
  CircularProgress,
  Typography,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    padding: theme.spacing(10),
    background: '#ececec',
    height: '100%',
  },
  title: {
    '& span': {
      fontSize: '15px',
      color: '#777',
    },
  },

  cardBlock: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  topSec: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: theme.spacing(6),
  },
  bottomSec: {
    borderTop: '1px solid #ccc',
    padding: theme.spacing(6, 0),
    '& ul': {
      padding: '0px',
      margin: '0px',
      display: 'inline-flex',
    },
    '& ul > li': {
      listStyleType: 'none',
      padding: '0 19px 0 19px',
      borderRight: '1px dotted #ccc',
      textAlign: 'center',
      '&:last-child': {
        borderRight: 'none',
      },
      '& span': {
        display: 'block',
      },
    },
  },
  task: {
    ...theme.palette.h5,
    color: theme.palette.dark,
  },
  count: {
    fontSize: '15px',
    paddingBottom: theme.spacing(1),
  },
  labelBox: {
    background: '#FFBEBE',
    color: '#f46363',
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold,
    width: theme.spacing(12),
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLeft: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  progress: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: '50%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid green',
    marginRight: theme.spacing(2),
  },
  boxTitle: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1, 0),
  },
  updateText: {
    color: theme.palette.dark,
  },
  colorPrimary: {
    color: 'green',
  },
}));

const CircularProgressWithLabel = props => {
  const classes = useStyles();
  return (
    <Box position="relative" display="inline-flex" right={10}>
      <CircularProgress
        color="primary"
        classes={{ colorPrimary: classes.colorPrimary }}
        thickness={1}
        {...props}
        size={50}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        height={50}
        width={50}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          C
        </Typography>
      </Box>
    </Box>
  );
};

const WorkCard = ({ classes }) => (
  <Grid item xs={3}>
    <Paper className={classes.cardBlock} elevation={2}>
      <div className={classes.topSec}>
        <div className={classes.boxLeft}>
          {/* <div className={classes.progress}>C</div> */}
          <CircularProgressWithLabel variant="static" value={80} />
          <div>
            <div className={classes.boxTitle}>Convotherm</div>
            <div className={classes.updateText}>
              Updated 25 mins ago | 70% done
            </div>
          </div>
        </div>
        <div className={classes.labelBox}>High</div>
      </div>
      <div className={classes.bottomSec}>
        <ul>
          <li>
            <span className={classes.count}>215,000</span>
            <span className={classes.task}>Labeled</span>
          </li>
          <li>
            <span className={classes.count}>1,459</span>
            <span className={classes.task}>Unlabeled</span>
          </li>
          <li>
            <span className={classes.count}>1,200</span>
            <span className={classes.task}>Assigned</span>
          </li>
          <li>
            <span className={classes.count}>95.6%</span>
            <span className={classes.task}>Performance</span>
          </li>
        </ul>
        <div />
      </div>
    </Paper>
  </Grid>
);

WorkCard.propTypes = {
  classes: PropTypes.object,
};

export default function WorkCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>&nbsp;</p>
      <h2 className={classes.title}>Work in Progress</h2>
      <Grid container>
        <WorkCard classes={classes} />
        <WorkCard classes={classes} />
        <WorkCard classes={classes} />
      </Grid>

      <h2 className={classes.title}>
        AILA <span>(Bounding Box Labelling)</span>
      </h2>
      <Grid container>
        <WorkCard classes={classes} />
        <WorkCard classes={classes} />
        <WorkCard classes={classes} />
        <WorkCard classes={classes} />
      </Grid>
    </div>
  );
}
