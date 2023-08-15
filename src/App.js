import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home'
import About from './component/about'
import Equipo from './component/equipo';
import CaseStudy from './component/casestudy';
import Metodology from './component/metodology';

import { ThemeProvider, CssBaseline, Container, AppBar, Box, Grid } from '@mui/material';
import logo from './logo.png';
import theme from './theme'; // Import the theme you created
import './App.css';
import './fonts.css'
import icono1 from './assets/iconos/icono-01.png'
import icono2 from './assets/iconos/icono-02.png'
import ColorStain from './component/colorstain';
import { blue, purple } from '@mui/material/colors';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <ColorStain color={purple[600]} size={'300px'} marginTop={'90px'} marginLeft={'calc(50% + 200px)'} zIndex={10000}/>
          <AppBar position="static" elevation={0} sx={{ width: '50px', backgroundColor: theme.palette.primary.main, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: `1.5px solid ${theme.palette.primary.light}` }}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="center" height="100%">
              <Grid item sx={{position:'fixed'}}>
                <img src={icono2} alt="icono" style={{ width: '40px', height: '40px', padding: '10px', opacity: '50%', marginTop: theme.spacing(2), alignItems: 'center'}} />
              </Grid>
              <Grid item sx={{  flexGrow: '2', display: 'flex', alignItems: 'center', position:'fixed', position:'middle' }}>
                <img src={icono1} alt="icono" style={{ width: '40px', height: '40px', padding: '10px', opacity: '50%' }} />
              </Grid>
            </Grid>
            {/* Additional content for the bottom of the AppBar */}
          </AppBar>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: theme.palette.primary.main, paddingTop: theme.spacing(4) }}>
              {/* Routes content */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/equipo" element={<Equipo />} />
                <Route path="/casestudy" element={<CaseStudy />} />
                <Route path="/metodology" element={<Metodology />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
