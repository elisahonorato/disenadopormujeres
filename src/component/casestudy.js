import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Fade, Box } from '@mui/material';
import case1 from '../assets/images/casestudy/case1.png';
import case2 from '../assets/images/casestudy/case1.png';

import theme from '../theme';

const caseStudies = [
  { image: case1, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case2, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case1, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case2, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case1, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case2, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case2, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case1, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },
  { image: case2, titulo: 'Miembro 1', formato: 'Afiche', autor: 'Ximena Ulibarri', año: '1976', archivo: 'Ximena Ulibarri' },



  // Add more team members here
];

function CaseStudy() {
  const [visibleCases, setVisibleCases] = useState(3); // Initial number of visible members
  const itemsPerLoad = 1; // Number of items to load each time

  const handleScroll = () => {
    if (window.innerHeight*(6/5) + window.scrollY >= document.body.offsetHeight) {
      // Load more cases when user reaches the bottom
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
            {/* Use the Fade component to achieve fade-in effect */}
            <Fade in={true} timeout={500}>
              <Box display="flex" flexDirection="column" alignItems="left" p={2}>
                <img src={study.image} alt={study.titulo} style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain', marginBottom: '3vh' }} />
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