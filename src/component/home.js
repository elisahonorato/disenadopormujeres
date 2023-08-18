import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/equipo/miembro1.jpg';
function Home() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" gutterBottom>
            Welcome to the World of About!
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod eget nisl eu facilisis.
            Fusce et nunc vel leo vestibulum dictum. Duis vel justo maximus, scelerisque risus sit amet,
            vestibulum lorem. Sed tristique dui non nisl faucibus, et auctor eros vulputate.
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
