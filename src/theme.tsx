import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Theme {
    container: {
      padding: string;
    };
    customColors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        dark: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    container?: {
      padding?: string;
    };
    customColors?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;

      };
      secondary?: {
        main?: string;
        dark?: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#D9DBE3',
      light: '#C2C4CC',
      dark: '#000000',

    },
    secondary: {
      main: '#FFC107',
      dark: '#8762AF', // purple color
      light: '#AFA2C8',
    },
  },
  typography: {
    h1: {
        fontFamily: 'ChronicleTextG2-Semibd-Pro, serif',
        fontSize: '4rem',
        
    },
    h2: {
        fontFamily: 'ChronicleTextG2-Semibd-Pro, serif',
        fontSize: '2.5rem',
    },
    h3: {
      fontFamily: 'UniversLTStd-Bold, Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,

      
    },

  
    h4: {
        fontFamily: 'UniversLTStd-Cn, Arial, sans-serif',
        fontSize: '1.1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    h5: {
        fontFamily: 'UniversLTStd-Cn, Arial, sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.2,
    },
    
    h6: {
        fontFamily: 'UniversLTStd-Regular, Arial, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 400,
        lineHeight: 1.2,
    },
    subtitle1: {
        fontFamily: 'ChronicleTextG2-Semibd-Pro, serif',
        fontSize: '1rem',
        textTransform: 'uppercase',
        
    
    },
    subtitle2: {
        fontFamily: 'ChronicleTextG1-Semibd-Pro, serif',
        fontSize: '1rem',
        textDecoration: 'uppercase',
        color: '#5B3E7C',
    },


  },
  container: {
    padding: '1rem',
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
