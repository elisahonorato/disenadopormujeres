import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import theme from '../theme.tsx';
import logoMinisterio from '../assets/images/footer/ministerio.png';

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          padding: theme.spacing(1),
          marginTop: theme.spacing(3),
          borderTop: `1.5px solid ${theme.palette.primary.light}`,
          position: 'sticky',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
           }}
           >
          <Typography variant="h3" >
            <Link href="https://www.cultura.gob.cl/" target="_blank" rel="noopener">
              <img src={logoMinisterio} alt="Ministerio de las Culturas, las Artes y el Patrimonio" style={{ width: '100%', maxWidth: '120px' }} />
            </Link>
          </Typography>
          <Typography variant="h4" sx={{ flexBasis: '30%'}}>
          Proyecto financiado por por el Fondo Nacional de Desarrollo Cultural y las Artes, convocatoria 2022
          </Typography>

        </Box>
        <Typography variant="h5">&copy; Elisa Honorato 2023</Typography>



      </Box>

    </footer>
  );
}

export default Footer;
