import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import theme from '../theme.tsx';

// Estilos para las flechas
const arrowStyle = {
  width: '0',
  height: '0',
  borderTop: '10px solid transparent',
  borderBottom: '10px solid transparent',
  borderRight: '10px solid #ccc',
  marginRight: '8px', // Espacio entre la flecha y el texto
};

function StyledBox({ children, color, bg, textAlign, height }) {
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        padding: '16px', // Aumentar el espacio interno
        borderRadius: '4px',
        bgcolor: bg || theme.palette.secondary.dark,
        color: color,
        textAlign: textAlign || 'center',
        marginTop: theme.spacing(2), // Espacio superior mayor
        marginBottom: theme.spacing(2), // Espacio inferior mayor
        height: height || 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: textAlign,
      }}
    >
      {children}
    </Box>
  );
}

function BoxEtapa({ etapa }) {
  return (
    <StyledBox color={theme.palette.primary.main} bg={theme.palette.secondary.dark} textAlign={'center'} height={'5rem'}>
      <Typography variant='subtitle1' sx={{ textDecoration: 'uppercase', lineHeight: '1.2' }}>
        {etapa}
  
      </Typography>
    </StyledBox>
  );
}

function BoxObjetivo({ objetivo }) {
  return (
    <StyledBox color={theme.palette.primary.dark} bg={theme.palette.primary.light} textAlign={'left'} height={'4rem'}>
      <Typography variant="h6">{objetivo}</Typography>
    </StyledBox>
  );
}

function BoxSubetapa({ subetapa }) {
  const subetapaChunks = [];
  for (let i = 0; i < subetapa.length; i += 2) {
    subetapaChunks.push(subetapa.slice(i, i + 2));
  }
  return (
    <>
      {subetapaChunks.map((chunk, index) => (
        <Grid container spacing={2} key={index}>
          {chunk.map((sub, subIndex) => (
            <Grid item xs={12} md={6} key={subIndex}>
              <StyledBox
                color={theme.palette.primary.dark}
                bg={theme.palette.secondary.light}
                textAlign={'left'}
                height={'6rem'}
              >
                <Typography variant="h6">{sub}</Typography>
             
              </StyledBox>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
}

function MetodologyGridItem({ etapa, objetivo, subetapa }) {
  return (
    <Grid item xs={9} md={3}>
      <BoxEtapa etapa={etapa} />
      <BoxObjetivo objetivo={objetivo} />
      <BoxSubetapa subetapa={subetapa} />
    </Grid>
  );
}

function MetodologyDescription() {
  return (
    <Grid item xs={3} md={3}>
      <BoxEtapa etapa="Etapa" />
      <BoxObjetivo objetivo="Objetivo" />
      <BoxSubetapa subetapa={['Subetapa 1', 'Subetapa 2']} />
    </Grid>
  );
}

function Metodology() {
  return (
    <Container maxWidth="xl" sx={theme.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">
            DpM ha sido concebida como la propuesta de un modelo instrumental que se distancia del androcentrismo e incorpora una perspectiva no sexista en el propio proceso investigativo, desafiando los cánones modernos y objetivistas para la construcción de una historia de las pioneras del diseño.
            <br /><br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">
            DpM es también una guía práctica que responde a la necesidad de visibilizar a las pioneras, avanzando en la generación de un conocimiento transformador para ellas y sus contextos, así como también contribuyendo a la generación de conocimiento transformador para la disciplina y la profesión.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">
            Los componentes clave y características de esta guía práctica hacen de DpM un modelo que permite que otros investigadores y otras investigadoras puedan replicar y escalar la acción epistemológica para construir la historia del diseño, posicionando a la disciplina a partir del aporte visibilizado de sus pioneras.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6">
            DpM como modelo instrumental se organiza de manera lógica y secuencial de la siguiente manera:
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: theme.spacing(4) }}>
            <MetodologyDescription />
            <MetodologyGridItem etapa="1. Fundamentación del Estudio" objetivo='Definir el sujeto y las variables de análisis para la definición del caso de estudio' subetapa={['1.1 Definición del concepto pionera en el contexto que se realiza el estudio.', '1.2 Determinación de los momentos históricos relevantes de las pioneras para el estudio.', '1.3 Identificación de las variables de análisis relevantes sobre las pioneras para el estudio.', '1.4 Selección de la pionera como caso de estudio.']} />
            <MetodologyGridItem etapa="2. Desarrollo del Estudio" objetivo='Caracterizar la trayectoria de la pionera' subetapa={['2.1 Delimitar el alcance del estudio con la pionera sobre..', '2.2 Construcción de la historia de vida de y con la pionera.', '2.3 Construcción de la narrativa de los contextos de la pionera.', '2.4 Construcción del corpus de la obra de y con la pionera.']} />
            <MetodologyGridItem etapa="3. Visibilización de los resultados del estudio" objetivo='Caracterizar la transformación de la pionera desde una perspectiva histórica, no sexista y co-creativa' subetapa={['3.1 Definición de criterios para procesamiento del corpus', '3.2 Interpretación de datos.', '3.3 Presentación de resultados']} />

            {/* Agrega más MetodologyGridItem con títulos según sea necesario */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Metodology;
