import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#D9DBE3',
      light: '#C2C4CC',

    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    h1: {
        fontFamily: 'ChronicleTextG2-Semibd-Pro, serif',
        fontSize: '4rem',
        
    },
    h4: {
        fontFamily: 'UniversLTStd-Cn, Arial, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    h6: {
        fontFamily: 'UniversLTStd-Bold, Arial, sans-serif',
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.5,
        textDecoration: 'none !important',
        color: '#000000',
    }


  },

  breakpoints: {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
    },
    spacing: [ 0, 4, 8, 16, 32, 64, 128, 256, 512]

});



export default theme;
