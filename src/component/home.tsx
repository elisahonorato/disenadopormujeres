import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/home/xime.jpg';
import theme from '../theme.tsx';
import ColorFilter from './colorfilter.tsx';
function Home() {
  return (
    <Container maxWidth="xl" sx={theme.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>

          <Typography variant="h2">
          Diseñado por Mujeres es un proyecto de investigación sobre mujeres pioneras del Diseño en Chile, a nivel de prácticas y discursos, para la construcción de un entorno disciplinar con equidad de género.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <ColorFilter image={aboutImage} alt='Ximena Ulibarri' customStyles={{ width: '100%', height: 'auto', objectFit: 'cover' }} hover={false} />
   
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
