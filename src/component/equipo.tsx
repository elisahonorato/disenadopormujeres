import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import miembro1 from '../assets/images/equipo/miembro1.jpg';
import miembro2 from '../assets/images/equipo/miembro2.jpg';
import theme from '../theme.tsx';
import ColorFilter from './colorfilter.tsx';

const teamMembers = [
  {
    image: miembro1,
    name: 'Katherine Mollenhauer',
    position: 'Directora',
    bio: 'Diseñadora en Equipamiento de la Universidad Tecnológica Metropolitana y Doctora en Diseño Estratégico e Innovación, Universidad de Barcelona'
  },
  {
    image: miembro2,
    name: 'Patricia Sánchez',
    position: 'Asistente de investigación',
    bio: 'Diseñadora, Pontificia Universidad Católica de Chile; Magister en Estudios de Género, Universidad de Chile'
  },
  {
    image: miembro2,
    name: 'Sara Riveros',
    position: 'Asistente de investigación',
    bio: 'Diseñadora, Pontificia Universidad Católica de Chile y Diplomada de Postítulo de Gestión en Salud de la Universidad de Valparaíso'
  },
  {
    image: miembro2,
    name: 'Olga Fuentes',
    position: 'Asistente de investigación',
    bio: 'Diseñadora de la Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro2,
    name: 'Pedro Álvarez',
    position: 'Co-investigador',
    bio: 'Diseñador, Magister y Doctor en Historia de la Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro2,
    name: 'Pablo Hermansen',
    position: 'Co-investigador',
    bio: 'Diseñador, Dr. Arquitectura y Estudios Urbanos, Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro2,
    name: 'Jose Guerra',
    position: 'Coordinador',
    bio: 'Antropólogo, Magíster en Estéticas Americanas, Pontificia Universidad Católica de Chile'
  }
];

function Equipo() {
  return (
    <Container maxWidth="xl" sx={theme.container}>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} sx={{ zIndex: 0}}>
            <div style={{ textAlign: 'left' }}>
          
                <ColorFilter image={member.image} alt={member.name} customStyles={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <Typography variant="h5" sx={{ paddingTop: theme.spacing(3), lineHeight: theme.spacing(2) }}>
                {member.name}
              </Typography>
              <Typography variant="h5" color="textSecondary" sx={{my:theme.spacing(1)}}>
                {member.position}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {member.bio}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Equipo;
