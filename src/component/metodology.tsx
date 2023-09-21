import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import theme from '../theme.tsx';

function Metodology() {
  return (
    <Container maxWidth="xl" sx={theme.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            Metodología
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Metodology;
