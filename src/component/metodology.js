import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/equipo/miembro1.jpg';
function Metodology() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh' }}>
      <Grid container spacing={4}>
        {/* Photo */}
        {/* Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            Metodology
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Metodology;
