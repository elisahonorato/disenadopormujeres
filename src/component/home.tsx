import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import aboutImage from '../assets/images/home/xime.jpg';
import revistaImage from '../assets/images/home/revista.png';
import theme from '../theme.tsx';
import ColorFilter from './colorfilter.tsx';
import ColorStain from './colorstain.tsx';
import { purple } from '@mui/material/colors';

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
    <Container maxWidth="xl">
      <ColorStain
        color={purple[600]}
        marginTop={'90px'}
        marginLeft={'calc(50% + 20vh)'}
        zIndex={10000}
      />
      <Grid container spacing={4} direction='row'> {/* grilla general */}
        <Grid item xs={12} md={4}> {/* grilla texto */}
          <Paper elevation={0}>
            <div
              style={{
                ...textOverlayStyles,
                position: positionStyle,
                padding: theme.spacing(2),
              }}
            >
              <Typography variant="h2" marginTop={4}>
                Diseñado por Mujeres es un proyecto de investigación sobre mujeres pioneras del Diseño en Chile, a nivel de prácticas y discursos, para la construcción de un entorno disciplinar con equidad de género
              </Typography>
            </div>
          </Paper>
        </Grid>
        {/* Contenedor para las imágenes */}
        <Grid item xs={12} md={8} container direction="row" alignItems={'self-end'}>
          <Grid item xs={4}>
            <ColorFilter image={revistaImage} alt='Ximena Ulibarri' customStyles={{ width: '140%', height: 'auto', objectFit: 'cover' }} hover={false} />
          </Grid>
          <Grid item xs={7}>
            <ColorFilter image={aboutImage} alt='Revista' customStyles={{ width: '110%', height: 'inherit', objectFit: 'cover' }} hover={false} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

