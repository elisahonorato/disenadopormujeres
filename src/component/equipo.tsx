import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import miembro1 from '../assets/images/equipo/miembro1.jpg';
import miembro3 from '../assets/images/equipo/miembro3.jpg';
import miembro4 from '../assets/images/equipo/miembro4.jpg';
import miembro5 from '../assets/images/equipo/miembro5.jpg';
import miembro6 from '../assets/images/equipo/miembro6.jpg';
import miembro7 from '../assets/images/equipo/miembro7.jpg';
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
    image: miembro3,
    name: 'Sara Riveros',
    position: 'Asistente de investigación',
    bio: 'Diseñadora, Pontificia Universidad Católica de Chile y Diplomada de Postítulo de Gestión en Salud de la Universidad de Valparaíso'
  },
  {
    image: miembro4,
    name: 'Olga Fuentes',
    position: 'Asistente de investigación',
    bio: 'Diseñadora de la Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro5,
    name: 'Pedro Álvarez',
    position: 'Co-investigador',
    bio: 'Diseñador, Magister y Doctor en Historia de la Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro6,
    name: 'Pablo Hermansen',
    position: 'Co-investigador',
    bio: 'Diseñador, Dr. Arquitectura y Estudios Urbanos, Pontificia Universidad Católica de Chile'
  },
  {
    image: miembro7,
    name: 'Jose Guerra',
    position: 'Coordinador',
    bio: 'Antropólogo, Magíster en Estéticas Americanas, Pontificia Universidad Católica de Chile'
  },
  {
    image: '',
    name: 'Patricia Sánchez',
    position: 'Asistente de investigación',
    bio: 'Diseñadora, Pontificia Universidad Católica de Chile; Magister en Estudios de Género, Universidad de Chile'
  },
  {
    image: '',
    name: 'Elisa Honorato',
    position: 'Colaboración de Programación y Diseño Web',
    bio: 'Diseñadora de la Pontificia Universidad Católica de Chile'
  }
];
function Equipo() {
  // Chunk the teamMembers array into groups of 3
  const chunkedTeamMembers = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    chunkedTeamMembers.push(teamMembers.slice(i, i + 3));
  }

  return (
    <Container>
      <Box>
        <Typography variant="h2" gutterBottom paddingTop={5} paddingBottom={2}>
          Equipo de Investigación
        </Typography>
      </Box>

      {chunkedTeamMembers.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {groupIndex === chunkedTeamMembers.length - 1 && (
            <Typography variant="h2" gutterBottom paddingTop={5} paddingBottom={2}>
              Colaboradoras
              </Typography>
          )}
          <Grid container paddingTop={2} spacing={6} paddingBottom={2}>
            {group.map((member, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                sx={{ zIndex: 0 }}
                alignContent={'center'}
                textAlign={'center'}
              >
                <Box style={{ textAlign: 'left' }} marginBottom={4}>
                  {member.image && (
                    <ColorFilter
                      image={member.image}
                      alt={member.name}
                      customStyles={{ width: '-webkit-fill-available', height: '250px', objectFit: 'cover', objectPosition: '10% 40%', }}
                      hover={false}
                    />
                  )}
                  <Typography variant="h5" sx={{ paddingTop: theme.spacing(3), lineHeight: theme.spacing(2) }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h5" color="textSecondary" sx={{ my: theme.spacing(1) }}>
                    {member.position}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {member.bio}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
}


export default Equipo;
