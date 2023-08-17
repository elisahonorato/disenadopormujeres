import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import miembro1 from '../assets/images/equipo/miembro1.jpg';
import miembro2 from '../assets/images/equipo/miembro2.jpg';
import theme from '../theme';


const teamMembers = [
  { image: miembro1, name: 'Miembro 1', position: 'Cargo 1' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  // Add more team members here
];

function CaseStudy() {
  return (
    <Container maxWidth="xl" style={{ paddingTop: theme.spacing(4) }}>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} sx={{zIndex: 2000000 }}>
            <div style={{ textAlign: 'left'}}>
              <div style={{ width: '100%', height: '150px', overflow: 'hidden', margin: '0 auto' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Typography variant="h4" sx={{ paddingTop: theme.spacing(3), lineHeight: theme.spacing(2) }}>{member.name}</Typography>
              <Typography variant="h4" color="textSecondary">{member.position}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CaseStudy;
