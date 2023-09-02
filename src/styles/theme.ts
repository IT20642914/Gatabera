import { createTheme } from '@mui/material/styles';

export const MUItheme = createTheme({
  typography: {
    fontFamily: 'Poppins,sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: 64,
    },
    h2: {
      fontWeight: 500,
      fontSize: 48,
    },
    h3: {
      fontWeight: 500,
      fontSize: 32,
    },
    h4: {
      fontWeight: 500,
      fontSize: 28,
    },
    h5: {
      fontWeight: 400,
      fontSize: 24,
    },
    h6: {
      fontWeight: 400,
      fontSize: 22,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 18,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 13,
    },
  },
  palette: {
    primary: {
      main: '#232C68',
      light: '#FFFFFF',
      dark: '#00499D',
    },
    secondary: {
      main: '#EF5423',
      dark: '#000000',
    },
    error: {
      main: '#EB5757',
    },
    info: {
      main: '#828282',
    },
  },
  spacing: (factor: any) => `${0.25 * factor}rem`,
});
