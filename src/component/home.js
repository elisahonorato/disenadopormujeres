import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/home/xime.jpg';
function Home() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
          Diseñado por Mujeres
          </Typography>
          <Typography variant="body1">
          Diseñado por Mujeres es un proyecto de investigación sobre mujeres pioneras del Diseño en Chile, a nivel de prácticas y discursos, para la construcción de un entorno disciplinar con equidad de género
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={aboutImage} alt="About Us" style={{ width: '100%', height: 'auto', }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
