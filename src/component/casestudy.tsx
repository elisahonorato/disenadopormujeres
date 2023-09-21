import React from 'react';
import { Container, Typography, Grid, Fade, Box } from '@mui/material';
import caseStudies from './caseStudies.tsx';

import theme from '../theme.tsx';

interface CaseStudyProps {
  titulo: string;
  autora: string;
  año: string;
  formato: string;
  archivo: string;
  image: string;
  folder: string;
}

const maxWidthImg = 345; // Usar un valor numérico en lugar de una cadena de texto

function importar(name, folder) {
  return require(`../assets/images/casestudy/${folder}/${name}`);
}

function CaseStudy() {
  const casesPerPage = 10; // Cantidad de casos de estudio por página

  const caseStudiesByFolder: Record < string, CaseStudyProps[]> = {};

  caseStudies.forEach((study) => {
    if (!caseStudiesByFolder[study.folder]) {
      caseStudiesByFolder[study.folder] = [];
    }
    caseStudiesByFolder[study.folder].push(study);
  });

  return (
    <Container maxWidth="xl" style={{backgroundColor: '#FFFFFF' }} sx={theme.container}>
      {Object.entries(caseStudiesByFolder).map(([folder, studies]) => {
        // Calcular la cantidad de páginas

        const pages = Math.ceil(studies.length / casesPerPage);

        // Generar un array de páginas con los casos de estudio correspondientes
        const pagesArray = Array.from({ length: pages }, (_, pageIndex) =>
          (studies as CaseStudyProps[]).slice(pageIndex * casesPerPage, (pageIndex + 1) * casesPerPage)
        );

        return pagesArray.map((pageStudies, pageIndex) => (
          <Box key={`${folder}_page_${pageIndex}`} marginBottom="40px">
            <Typography variant="h2" style={{ marginBottom: theme.spacing(1) }}>
              {folder}
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {pageStudies.map((study, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={4} 
                  lg={4}
                  style={{
                    display: 'flex',
                    marginBottom: '20vh',
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    padding: '0 20px',
                  }}
                >
                  <Fade in timeout={1000 + index * 50} >
                    <Box sx={{ width: '100%', height: 'auto', margin: '0 auto'}}>
                      <img
                        src={importar(study.image, folder)}
                        alt={study.titulo}
                        style={{ 
                          width: `${maxWidthImg}px`, // Utiliza el valor numérico con 'px'
                          maxHeight: `${maxWidthImg * 1.5}px`, 
                          objectFit: 'cover',
                          alignSelf: 'flex-start',
                          marginBottom: theme.spacing(2),
                          marginTop: theme.spacing(5),
                        }}
                      />
                      <Box style={{ position: 'absolute', width: `${maxWidthImg}px` }}>
                        <Typography variant="h4" style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(0)}}>
                          <strong> 
                            Título: {study.titulo}
                          </strong>
                          
                        </Typography>
                        <Typography variant="h5">
                          Autora: {study.autora}
                        </Typography>
                        <Typography variant="h5">
                          Año: {study.año}
                        </Typography>
                        <Typography variant="h5">
                          Formato: {study.formato}
                        </Typography>
                        <Typography variant="h5">
                          Archivo: {study.archivo}
                        </Typography>
                      </Box>
                    </Box>
                  </Fade>
                  
                </Grid>
              ))}
            </Box>
          </Box>
        ));
      })}
    </Container>
  );
}

export default CaseStudy;


