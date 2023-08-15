import React from 'react';
import { Container, Typography } from '@mui/material';
import miembro1 from '../assets/images/equipo/miembro1.jpg';
import miembro2 from '../assets/images/equipo/miembro2.jpg';
import theme from '../theme';
// Importa todas las imágenes del equipo aquí

const teamMembers = [
  { image: miembro1, name: 'Miembro 1', position: 'Cargo 1' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  { image: miembro2, name: 'Miembro 2', position: 'Cargo 2' },
  // Agrega más miembros del equipo aquí
];

function Equipo() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: theme.spacing(4)}}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ width: '150px', height: '150px', overflow: 'hidden', margin: '0 auto' }}>
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Typography variant="h6" sx={{textAlign:'left', paddingTop: theme.spacing(3), lineHeight: theme.spacing(2)}}>{member.name}</Typography>
            <Typography variant="body2" color="textSecondary" sx={{textAlign:'left'}}>{member.position}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Equipo;


