import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import aboutImage from '../assets/images/home/xime.png';
import ColorFilter from './colorfilter.tsx';
import ColorStain from './colorstain.tsx';
import { purple } from '@mui/material/colors';
import theme from '../theme';
// @ts-ignore
import video from '../assets/videos/about_2023.mp4';


interface AboutProps {
  theme: any;
}

function About({ theme }: AboutProps) {
  const aboutContent: string[] = [
    "“Diseñado por Mujeres: pioneras del diseño en Chile\" es un proyecto de investigación aplicada que no solo busca visibilizar las trayectorias de las pioneras del diseño a nivel nacional, sino que levanta los criterios que permiten reconocerlas. Por medio del uso de un enfoque situado, esta investigación interdisciplinaria intentó contribuir a disminuir la brecha en la valoración entre hombres y mujeres, poniendo de paso en evidencia el sesgo de género que existe al momento de caracterizar a una trayectoria profesional como exitosa.",
    "La historiografía del diseño ha identificado parte de las causas que excluyen a las mujeres del relato canónico de la disciplina; tomando recientemente medidas para enmendar el evidente desbalance entre las publicaciones monográficas sobre hombres y mujeres. Sin embargo, la profunda y sistemática omisión de las mujeres obliga a tener que repensar las herramientas de recolección de datos, métodos y variables que operan al momento de escribir la historia oficial. En respuesta a ello, el proyecto DpM no es una investigación limitada al loable esfuerzo de relevar parte del tan copioso como ignorado material producido por mujeres diseñadoras desde los albores de la disciplina en Chile, sino que propone una nueva forma para enfrentar esta brecha.",
    "El desarrollo del proyecto materializa el supuesto de que el relato histórico es en sí mismo un objeto posible de ser diseñado, desconociendo de esta manera la hegemonía que pueda detentar una determinada disciplina o método sobre cómo se debe construir la historia. Al establecer este criterio se propicia un diálogo entre modalidades investigativas provenientes de distintas disciplinas, permitiendo de este modo la posibilidad de que diversas fuentes, soportes y agentes puedan aportar en la construcción histórica. A partir del trabajo articulado de Diseño, Historia y Antropología se profundizó en la trayectoria de la diseñadora pionera Ximena Ulibarri, logrando elaborar un plan metodológico que consideró tanto las cualidades particulares de la pionera como los contextos en los que se vio inserta durante el ejercicio de su profesión."
  ];

  return (
    <Container maxWidth="xl" sx={theme.container}>
      <ColorStain 
              color={purple[600]}
              marginTop={'90px'}
              marginLeft={'calc(50% + 20vh)'}
              zIndex={10000}
            />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{mt:theme.spacing(4)}}>
          {aboutContent.map((paragraph, index) => (
            <Typography key={index} variant="h4" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} md={6} textAlign={'right'}>
          <video style={{maxWidth: '100%'}} autoPlay={true} controls>
            <source src={video} type="video/mp4"></source>
          
            Your browser does not support HTML video.
          </video>

      
        
      </Grid>
    </Grid>
    </Container>
  );
}

export default About;
