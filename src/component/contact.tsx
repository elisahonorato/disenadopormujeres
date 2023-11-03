import React from 'react';
import { Typography, Box, Container, Grid, Paper, Link } from '@mui/material';
import { purple } from '@mui/material/colors';
import ColorStain from './colorstain.tsx';
import ColorFilter from './colorfilter.tsx';
import aboutImage from '../assets/images/home/xime.png';
import theme from '../theme.tsx';

function Contact() {


  const headingStyle = {
    fontSize: '2.5rem',
  };


  const infoItemStyle = {
    marginBottom: theme.spacing(2),
  };

  return (
    <Container maxWidth="xl" sx={{ mt: theme.spacing(3) }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ColorStain
            color={purple[600]}
            marginTop={'90px'}
            marginLeft={'calc(50% + 20vh)'}
            zIndex={10000}
          />
          <ColorFilter
            image={aboutImage}
            alt="Ximena Ulibarri"
            customStyles={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            hover={false}
          />
        </Grid>
        <Grid item xs={12} md={6}>

          <Typography variant="h2" gutterBottom sx={headingStyle}>
            Contáctanos
          </Typography>
          <Box mt={3} sx={infoItemStyle}>
            <Typography variant="h5" fontWeight="bold">
              Nombre
            </Typography>
            <Typography variant="h5" sx={{ textAlign: 'left' }}>
              Katty Mollenhauer
            </Typography>
          </Box>
          <Box mt={3} sx={infoItemStyle}>
            <Typography variant="h5" fontWeight="bold">
              Mail
            </Typography>
            <Typography variant="h5">
              katty.mollenhauer@gmail.com
            </Typography>
          </Box>
          <Box mt={3} sx={infoItemStyle}>
            <Typography variant="h5" fontWeight="bold">
              Teléfono
            </Typography>
            <Typography variant="h5">+56 9 7528 4483</Typography>
          </Box>
          <Box mt={3} sx={infoItemStyle}>
            <Typography variant="h5" fontWeight="bold">
              Dirección
            </Typography>
            <Typography variant="h5">Campus Lo Contador. Santiago de Chile</Typography>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
