import React from 'react';
import { Typography, Box } from '@mui/material';

function Contact() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Contáctanos
      </Typography>
      <Box mt={4}>
        <Typography variant="h6">Email</Typography>
        <Typography variant="body1">contacto@uc.cl</Typography>
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
