import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Fade, Box } from '@mui/material';
import caseStudies from './caseStudies';

import theme from '../theme';


function importar (name, folder) {
  return require(`../assets/images/casestudy/${folder}/${name}`);
}



function CaseStudy() {
  const [visibleCases, setVisibleCases] = useState(3); // Casos iniciales
  const itemsPerLoad = 1; // Casos que se cargan cada vez

  const handleScroll = () => {
    if (window.innerHeight*(6/5) + window.scrollY >= document.body.offsetHeight) {
      // Este es el límite de la pantalla
      setVisibleCases((prevVisibleCases) =>
        Math.min(prevVisibleCases + itemsPerLoad, caseStudies.length)
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="xl" style={{ paddingTop: theme.spacing(4) }}>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {caseStudies.slice(0, visibleCases).map((study, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} lg={2} style={{ display: 'flex', justifyContent: 'center', marginBottom: '10vh'}}>
            {/* Efecto fade */}
            <Fade in={true} timeout={500}>
              <Box display="flex" flexDirection="column" alignItems="left" p={2}>
                <img src={importar(study.image, study.folder)} alt={study.titulo} style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain', marginBottom: '3vh' }} />
                <Typography variant="body1" align="left">
                  <strong>Título: </strong>
                  {study.titulo}
                </Typography>
                <Typography variant="body1" align="left">
                  <strong>Formato: </strong>
                  {study.formato}
                </Typography>
                <Typography variant="body1" align="left">
                  <strong>Autor: </strong>
                  {study.autor}
                </Typography>
                <Typography variant="body1" align="left">
                  <strong>Año: </strong>
                  {study.año}
                </Typography>
                <Typography variant="body1" align="left">
                  <strong>Archivo: </strong>
                  {study.archivo}
                </Typography>

              </Box>
            </Fade>
          </Grid>
        ))}
      </Box>
    </Container>
  );
}

export default CaseStudy;