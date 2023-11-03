// Footer.js
import { Box } from '@mui/material';
import React from 'react';
import theme from '../theme.tsx';
import zIndex from '@mui/material/styles/zIndex';
import logoMinisterio from '../assets/images/footer/ministerio.png';

function Footer() {
  return (
    <footer>
      <Box sx={{padding: '0.5rem', marginTop:'0.1rem', textAlign: 'center', borderTop: `1.5px solid ${theme.palette.primary.light}`, zIndex: 10000, display: 'flex', position: 'sticky', backgroundColor: theme.palette.primary.main, justifyContent: 'space-between'}}>
        <Box >
          <img src={logoMinisterio} alt="Logo Ministerio" width="100px" />

        </Box>
        <Box alignItems={'center'} display={'flex'}>
          &copy; Elisa Honorato 2023
        </Box>
        
      </Box>
    </footer>
  );
}

export default Footer;
