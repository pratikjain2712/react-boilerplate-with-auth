import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import CustomSVG from '../../../../icons/CustomSVG';

const useStyles = makeStyles(() => ({
  circle: {
    minWidth: 25,
    height: 25,
    padding: 0,
    // borderRadius: 100,
  },
}));

function MenuButton({ handleClick }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Button
      className={classes.circle}
      aria-haspopup="true"
      onClick={handleClick}
    >
      <CustomSVG
        name="mlMenue"
        onClick={() => {}}
        fill={theme.palette.text.main}
        height="25"
        width="25"
        viewBox="0 0 24 24"
        role="presentation"
      />
    </Button>
  );
}
MenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default MenuButton;
