// Footer.js
import { Box } from '@mui/material';
import React from 'react';
import theme from '../theme.tsx';

function Footer() {
  return (
    <footer>
      <Box sx={{padding: '0.5rem', marginTop:'0.1rem', textAlign: 'center', borderTop: `1.5px solid ${theme.palette.primary.light}`}}>
        &copy; Elisa Honorato 2023
      </Box>
    </footer>
  );
}

export default Footer;
