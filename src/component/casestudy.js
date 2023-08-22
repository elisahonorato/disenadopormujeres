import React from 'react';
import { Container, Typography, Grid, Fade, Box } from '@mui/material';
import caseStudies from './caseStudies';

import theme from '../theme';

function importar(name, folder) {
  return require(`../assets/images/casestudy/${folder}/${name}`);
}

function CaseStudy() {
  const caseStudiesByFolder = {};
  caseStudies.forEach((study) => {
    if (!caseStudiesByFolder[study.folder]) {
      caseStudiesByFolder[study.folder] = [];
    }
    caseStudiesByFolder[study.folder].push(study);
  });

  return (
    <Container maxWidth="xl" style={{ paddingTop: theme.spacing(4) }}>
      {Object.entries(caseStudiesByFolder).map(([folder, studies]) => (
        <Box key={folder} marginBottom="40px">
          <Typography variant="h2" style={{ marginBottom: theme.spacing(4) }}>
            {folder}
          </Typography>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {studies.map((study, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={3}
                lg={2}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '10vh',
                }}
              >
                <Fade in={true} timeout={500}>
                  <Box display="flex" flexDirection="column" alignItems="flex-start" p={2} textAlign="left">
                    <img src={importar(study.image, study.folder)} alt={study.titulo} style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain', marginBottom: '3vh' }} />
                    <Typography variant="body1" align="left">
                      <strong>Título: </strong>
                      {study.titulo}
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
                      <strong>Formato: </strong>
                      {study.formato}
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
        </Box>
      ))}
    </Container>
  );
}

export default CaseStudy;
