import React from 'react';
import { Typography, Box } from '@mui/material';
import theme from '../theme.tsx';
import ColorStain from './colorstain.tsx';
import { purple } from '@mui/material/colors';

function Contact() {
  return (
    <Box marginLeft={theme.spacing(2)}>
      <ColorStain 
              color={purple[600]}
              marginTop={'90px'}
              marginLeft={'calc(50% + 20vh)'}
              zIndex={10000}
            />
      <Typography variant="h1" gutterBottom>
        Contáctanos
      </Typography>
      <Box mt={4}>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">katty.mollenhauer@gmail.com</Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Teléfono</Typography>
        <Typography variant="body1">+56 9 7528 4483</Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Dirección</Typography>
        <Typography variant="body1">
          Campus Lo Contador
          <br />
          Santiago, Chile
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
