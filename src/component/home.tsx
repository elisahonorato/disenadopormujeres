import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/home/xime.jpg';
import theme from '../theme.tsx';
import ColorFilter from './colorfilter.tsx';

// Definir un tipo personalizado para 'position'
type Position = 'sticky' | 'absolute';


function Home() {
  const [positionStyle, setPositionStyle] = useState<Position>('sticky');
  const [width, setWidth] = useState('100%');
  const textOverlayStyles = {
    zIndex: 1,
    width: width,
  };
  

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 600) {
        setWidth('100%')
        setPositionStyle('sticky');
      } else {
        setPositionStyle('absolute');
        setWidth('60%');
      }
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Container maxWidth="xl" sx={theme.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              ...textOverlayStyles,
              position: positionStyle,
            }}
          >
            <Typography variant="h2">
              Diseñado por Mujeres es un proyecto de investigación sobre mujeres pioneras del Diseño en Chile, a nivel de prácticas y discursos, para la construcción de un entorno disciplinar con equidad de género.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <ColorFilter image={aboutImage} alt='Ximena Ulibarri' customStyles={{ width: '100%', height: 'auto', objectFit: 'cover' }} hover={false} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
