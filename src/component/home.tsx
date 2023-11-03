import React from 'react';
import { Container, Typography, Box, Grid, useMediaQuery } from '@mui/material';
import aboutImage from '../assets/images/home/xime.png';
import revistaImage from '../assets/images/home/revista.png';
import { purple } from '@mui/material/colors';
import ColorFilter from './colorfilter.tsx';
import ColorStain from './colorstain.tsx';

function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth="xl">
      <ColorStain
        color={purple[600]}
        marginTop={isSmallScreen ? '50px' : '90px'}
        marginLeft={isSmallScreen ? '0' : 'calc(50% + 20vh)'}
        zIndex={10000}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box p={2} position="relative" height="100%" display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Typography variant="h2" zIndex={100} position={'relative'} width="120%" marginTop={5}>
              Diseñado por Mujeres es un proyecto de investigación sobre mujeres pioneras del Diseño en Chile, a nivel de prácticas y discursos, para la construcción de un entorno disciplinar con equidad de género
            </Typography>
            <div>
              <ColorFilter
              image={revistaImage}
              alt="Imagen"
              customStyles={{
                width: '60%',
                height: 'auto',
                float: 'right',
                marginTop: '20px',
              }}
              hover={true}
            />
            </div>

          </Box>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <ColorFilter
            image={aboutImage}
            alt="Imagen"
            customStyles={{
              width: '95%',
              height: 'auto',
              marginBottom: isSmallScreen ? '20px' : '0',
            }}
            hover={true}
          />
          
        </Grid>
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
    </Container>
  );
}

export default Home;
