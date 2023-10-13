import React from 'react';
import { Container, Typography, Grid, Fade, Box } from '@mui/material';
import caseStudies from './caseStudies.tsx';

import theme from '../theme.tsx';
import { Divider } from '@mui/material';

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

  const caseStudiesByFolder: Record<string, CaseStudyProps[]> = {};

  caseStudies.forEach((study) => {
    if (!caseStudiesByFolder[study.folder]) {
      caseStudiesByFolder[study.folder] = [];
    }
    caseStudiesByFolder[study.folder].push(study);
  });

  return (
    <Container maxWidth="xl" style={{ backgroundColor: '#FFFFFF' }} >
      <Grid container spacing={4} pt={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" paragraph>Trayectorias</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" paragraph >
            Ximena Ulibarri estudió Arte y Diseño en la Pontificia Universidad Católica de Chile, siendo parte de las primeras generaciones de egresadas formadas durante la Reforma Universitaria, proyecto disruptivo liderado por Fernando Castillo Velasco, primer y único rector elegido por la comunidad de la institución de forma abierta y horizontal.
          </Typography>
          <Typography variant="h4" paragraph>
            Durante los dos primeros e intensos años de su formación universitaria, se encontró con académicos y profesionales que marcarían su trayectoria; en el ámbito del arte fueron Teresa Vicuña, en el de la escultura; Eduardo Vilches, profesor de dibujo, color y xilografía; Pedro Millar, encargado de la enseñanza de la litografía; Mario Carreño, en la sección de pintura, y José Ricardo Morales, experto en historia del arte, con una visión contemporánea renovada, contrastando con los enfoques tradicionales previamente enseñados en escuelas de artes y artes aplicadas. En diseño, donde la disciplina proyectaba un futuro con mayores desafíos, los profesores más influyentes fueron Alberto Piwonka, Raimundo Infante y Luis Moreno, de formación arquitectos, y Mariano Rawicz, profesor de tipografía cercano a Mauricio Amster. Todos ellos, desde sus especialidades, potenciaron el desarrollo profesional de Ximena, fomentando la comprensión desde diferentes visiones y sentidos de los proyectos y obras que se realizaban en un contexto situado.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" paragraph>
            En 1976 obtuvo el título de “Diseñadora”, con una propuesta que consistió en el diseño de un libro enteramente ilustrado, con una reflexión sobre el color, dirigido a niñas y niños entre 7 y 9 años. Posteriormente, cursó Licenciatura en Estética, en la misma casa de estudios, lo que le permitió acceder a nuevos conocimientos, abordando la temática del cine bajo la guiatura de Luis Cecereu en su proyecto final. Fue un período de importante desarrollo profesional y desafío intelectual al compartir con académicos tales como Teresa Viviani, Gastón Soublette, Fidel Sepúlveda, Luis Hernán Errázuriz, Regina Valdés, Jaime Blume, Radoslav Ivelic y Claudia Lira, entre otros.
          </Typography>
          <Typography variant="h4" paragraph>
            Como continuación de sus estudios realizó un Magíster en Educación y Comunicación en la Pontificia Universidad Católica de Chile, entre 2007 y 2010. El postgrado le permitió abordar la inserción del diseño en el contexto de la educación secundaria en nuestro país a través de una propuesta titulada “Diseño, evolución e innovación en la vida cotidiana”.
          </Typography>
        </Grid>
        {/* Agregar un divider */}
        <Grid item xs={12} md={6} mt={4}>
          <Typography variant="h4" paragraph>
            Sus primeros trabajos profesionales fueron como ilustradora de portadas o interiores en editoriales de relevancia como Lord Cochrane y Zig-Zag, diseñando además algunas publicaciones en su totalidad, durante la llamada Unidad Popular. Luego del golpe militar, ingresa en 1975 a Publicidad Universitaria para dos años después ser nombrada Directora Creativa de la misma. Esta oficina de diseño tuvo su origen como un espacio para abordar el diseño de diversas publicaciones de orden interno, y también externo, además de otras áreas creativas y proyectuales asociadas como señalética, identidad visual, cartelismo y exposiciones.
          </Typography>
          <Typography variant="h4" paragraph>
            Ulibarri trabajó en Publicidad Universitaria cerca de 26 años, desarrollando un gran volumen de proyectos editoriales, carteles e identidad visual a nivel nacional, que ayudaron a asentar el diseño como una práctica profesional y no solo como un oficio, derivación proveniente de las artes aplicadas. Durante ese período se funda Ediciones UC, el sello editorial de la universidad, que solicita el diseño de libros y colecciones. A su vez, también se proyecta la edición de la Revista Universitaria y Revista Humanitas, ambas como publicaciones periódicas. En este sentido, Ximena Ulibarri configura el imaginario visual de las publicaciones y parte de las comunicaciones de la Universidad, durante más de dos décadas. Por ello, es quien diseña y organiza el primer manual de normas de identidad visual de la universidad, reforzando el potencial de la marca UC.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} mt={4}>
          <Typography variant="h4" paragraph>
            Simultáneamente, Ximena recibe múltiples invitaciones de diferentes casas editoriales, instituciones gubernamentales y públicas, empresas privadas de relevancia, espacios de arte y cultura, y personas destacadas en los campos de las artes y las ciencias para trabajar y dialogar con ellos de forma permanente, proceso en el que experimentó las transformaciones que se dieron en el ámbito tecnológico, cultural y la educación continua.
          </Typography>
          <Typography variant="h4" paragraph>
            En este período, los encargos profesionales más desafiantes y significativos fueron Revista Universitaria, bajo la dirección de Cecilia García Huidobro y Gonzalo Saavedra; Teleduc, trabajo desarrollado en conjunto con Teresa Matte como directora; Brocha del siglo XXI, publicación pionera en Chile que integró el arte con la tecnología digital, en coordinación con Nemesio Antúnez y Alfonso Gómez; la creación del Centro de Extensión UC, proyecto impulsado por Patricio Donoso; CineUC, con su festival de cine y ciclos de películas, además de otras iniciativas de carácter cultural donde pudo interiorizarse con los procesos de diseño e implementación de estos proyectos.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" paragraph>
            Otra deriva de interés en el trabajo profesional de Ximena fue su relación como diseñadora con el mundo del teatro, lo que trajo consigo el trabajo coordinado en proyectos con Macarena Baeza, directora de La Calderona, en Teatro UC, participando en el diseño y comunicación visual de obras teatrales de Shakespeare, Calderón de la Barca, Miguel de Cervantes y Federico García Lorca, entre otras. Estos proyectos con teatro tuvieron también un correlato en talleres de diseño impartidos por Ulibarri en relación con obras como El retablo de las maravillas y una adaptación basada en la obra de Gabriela Mistral, quien también fue pionera en la difusión de la poesía en Chile.
          </Typography>
          <Typography variant="h4" paragraph>
            Ulibarri ingresó a la academia en 1995, primero en la Facultad de Comunicaciones de la universidad y luego en la Escuela de Diseño UC de modo permanente, dictando los talleres superiores de Calidad y Mercado, además de guiar destacados proyectos de título. Al mismo tiempo, realiza cursos de segundo y tercer año en la Universidad del desarrollo (UDD). En ambas instituciones ha formado estudiantes luego reconocidos en el ámbito profesional, vinculándose además con profesionales de otras áreas, caso del taller realizado en conjunto con los poetas visuales Felipe Cussen y Martin Gubbins.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" paragraph>
            En su trayectoria profesional, docente y académica, Ximena Ulibarri ha colaborado con destacados diseñadores como Eddy Carmona, José Miguel Cariaga, Raineau Gravel, Carlos Salazar, Claudia Palma, Verónica Chaparro, Danko Tomicic, Omar Faúndez, Anita Echeverria, Pablo Hermansen, Pedro Álvarez, Rosa María Espinoza, Paula Celedón, Patricio Cortés, Carolina Santana, Javiera López y Ximena Herreros, entre otros, impactando con su práctica profesional como diseñadora al desarrollo de la disciplina a nivel nacional.
          </Typography>
          <Typography variant="h4" paragraph>
            Revista Diseña es uno de los proyectos más importantes dentro de su desarrollo profesional y también de pensamiento crítico. En cada una de las once ediciones que publicó en calidad de directora y diseñadora se abordan temas fundamentales desde y sobre el diseño, contando con la participación de académicos de las principales escuelas de diseño del país como también personajes destacados a nivel nacional e internacional, para incorporarse a las temáticas y controversias que cada número abordó. Los desafíos que se enfrentaron no fueron pocos, siendo Diseña la segunda revista académica de la Escuela de Diseño UC, pero la primera con salida a librerías y dimensión internacional. Ulibarri asumió su dirección en 2009 buscando, durante 9 años y a través de 11 ediciones, dialogar sobre las múltiples maneras en que la práctica del diseño aporta un valor singular.
          </Typography>
          <Typography variant="h4" paragraph>
            Entre los principales premios y distinciones de su carrera como diseñadora, podemos mencionar el Primer gran premio IV Concurso de Arte Gráfico Publicitario, con su libro Coca-Cola, 50 años en Chile, obtenido en 1991; el premio Mauricio Amster por Brocha del Siglo XXI, en 1994; el Premio Altazor 14ª versión en la categoría Artes Visuales, por su trabajo en revista Diseña, en 2013; el “Premio a la Trayectoria” otorgado por Chile Diseño, en 2017, y su aparición en “Maestros del Diseño en América Latina”, proyecto de rescate de la obra y trayectoria de diseñadoras y diseñadores curado por Felipe Taborda en Experimenta Web Serie en 2021, entre otros.
          </Typography>
        </Grid>
        
      </Grid>

      {
        Object.entries(caseStudiesByFolder).map(([folder, studies]) => {
          // Calcular la cantidad de páginas

          const pages = Math.ceil(studies.length / casesPerPage);

          // Generar un array de páginas con los casos de estudio correspondientes
          const pagesArray = Array.from({ length: pages }, (_, pageIndex) =>
            (studies as CaseStudyProps[]).slice(pageIndex * casesPerPage, (pageIndex + 1) * casesPerPage)
          );

          return pagesArray.map((pageStudies, pageIndex) => (
            <Box key={`${folder}_page_${pageIndex}`} paddingTop={theme.spacing(3)} paddingBottom={theme.spacing()}>
              <Typography variant="h2" style={{ marginBottom: theme.spacing(1), marginTop: theme.spacing(2) }}>
                {folder}
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="center" >
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
                      <Box sx={{ width: '100%', height: 'auto', margin: '0 auto' }}>
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
                          <Typography variant="h4" style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(0) }}>
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
        })
      }
    </Container >
  );
}

export default CaseStudy;


