import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import theme from '../theme.tsx';
import metodology from '../assets/images/metodologia/metodologia.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import pdf from '../assets/pdf/ToolkitDpM.pdf'





function Metodology() {
  const onButtonClick = () => {
    console.log("Descargando pdf")
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ToolkitDpM.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  }

  return (
    <Container maxWidth="xl" sx={{ mt: theme.spacing(3) }}>
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
          <Grid item xs={12} md={12} style={{ textAlign: 'center', marginTop: '3rem', backgroundColor: theme.palette.primary.main }}>
            <div style={{ backgroundColor: theme.palette.primary.main, zIndex: 2 }}>
              <img src={metodology} alt='metodology' style={{ width: '100%', zIndex: 3 }} />


            </div>
          </Grid>
          <Grid item xs={12} display={'flex'} alignItems={'center'} gap={'0.5rem'}  onClick={onButtonClick} paddingBottom={'20px'} >
            <FaCloudDownloadAlt style={{ fontSize: '1.8rem', paddingLeft: theme.spacing(2) }} />
            <Typography variant="h6">
              Descargar Toolkit
            </Typography>

          </Grid>

         
        </Grid>

      </Grid>

    </Container>
  );
}

export default Metodology;
