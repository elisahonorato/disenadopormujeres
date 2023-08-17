import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/equipo/miembro1.jpg';
function About() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh' }}>
      <Grid container spacing={4}>
        {/* Photo */}
        {/* Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            Welcome to the World of About!
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}

export default About;
