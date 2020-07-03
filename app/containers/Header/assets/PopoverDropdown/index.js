import React from 'react';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menuDrop: {
    boxShadow:
      '0px -1px 5px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.2)',
    minWidth: 400,
    padding: theme.spacing(2),
  },
  tabDrop: {
    boxShadow:
      '0px -1px 5px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.2)',
    minWidth: 200,
    padding: theme.spacing(2),
  },
}));

function PopoverDropdown({
  open,
  anchorEl,
  handleClose,
  hotIcon,
  custonClassName,
  options,
  setOpen,
  setAction,
}) {
  const classes = useStyles();

  return (
    <Popover
      classes={{ paper: classes[custonClassName] }}
      id="mouse-over-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {options.recent && (
        <ListItem style={{ marginBottom: '5px' }}>Recent Visited</ListItem>
      )}
      {options.options &&
        options.options.map(option => (
          <MenuItem
            onClick={() => {
              handleClose();
              setOpen(true);
              setAction(option);
            }}
          >
            {options.image && <img src={hotIcon} alt="icon" />} &nbsp; {option}
          </MenuItem>
        ))}

      {/* <MenuItem onClick={handleClose}>
        <img src={hotIcon} alt="icon" /> &nbsp; Marketing
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <img src={hotIcon} alt="icon" /> &nbsp; REWE
      </MenuItem> */}

      {options.recent && (
        <ListItem style={{ cursor: 'pointer' }}>Recent Visited</ListItem>
      )}
    </Popover>
  );
}
PopoverDropdown.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  hotIcon: PropTypes.string,
  custonClassName: PropTypes.string,
  options: PropTypes.object,
  setOpen: PropTypes.func,
};

export default PopoverDropdown;
