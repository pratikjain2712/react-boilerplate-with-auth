import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    backgroundColor: {
      light: '#f5f5f5',
      main: '#ffffff',
    },
    primary: {
      light: '#fbfbfb',
      main: '#ab521e',
      dark: '#898d93',
    },
    secondary: {
      light: '#f2f2f2',
      main: '#eeeeee',
      dark: '#f5f5f5',
    },
    dropdownColor: {
      border: '#d9d9d9',
      text: '#333333',
      selection: '#f2f2f2',
    },
    text: {
      light: '#9A9A9A',
      main: '#333333',
      dark: '#707070',
      other: '#ab521e',
      white: '#ffffff',
    },
    button: {
      primary: {
        backgroundColor: '#333333',
        color: '#ffffff',
      },
      secondary: {
        border: '#d9d9d9',
        color: '#333333',
      },
      ghost: {
        backgroundColor: '#818181',
        color: '#ffffff',
      },
      link: {
        color: '#ffffff',
      },
    },
    menu: {
      main: '#ab521e',
      selection: '#333333',
      unselected: '#9a9a9a',
    },
    lineBorderColor: {
      light: '#eeeeee',
      main: '#e6e6e6',
      dark: '#d9d9d9',
      dBorder: '#9a9a9a',
    },
    blackShades: {
      d1: '#111111',
      d2: '#373737',
      d3: '#666666',
      d4: '#878787',
    },
    whiteShades: {
      l1: '#ffffff',
      l2: '#f8f8f8',
      l3: '#d5d5d5',
      l4: '#aaaaaa',
    },
    utils: {
      error: '#ff272e',
      warning: '#ffac07',
      info: '#67b3ff',
      success: '#009a1e',
    },

    scroll: {
      light: '#e6e6e6',
      main: '#fff',
      dark: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: 'inherit',
    },
    h2: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: 'inherit',
    },
    h3: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: 'inherit',
    },
    h4: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 'inherit',
    },
    h5: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 'inherit',
    },
    h6: {
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: 'inherit',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: 1.17,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: 1.6,
    },
    button: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'inherit',
      padding: '5px 0px',
      minHeight: 35,
      minWidth: 125,
      border: 'none',
      borderRadius: '5px',
    },
  },
  alphabets: {
    m: '#FFECBE',
    h: '#FFBEBE',
    l: '#CEF1D4',
  },
  spacing: factor =>
    [
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100,
    ][factor],
});
