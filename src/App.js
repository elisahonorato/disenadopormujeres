import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Equipo from './component/equipo';
import CaseStudy from './component/casestudy';
import Metodology from './component/metodology';
import Contact from './component/contact'
import VerticalNavbar from './component/verticalnavbar';
import ColorStain from './component/colorstain';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import theme from './theme';
import './App.css';
import './fonts.css';
import { purple } from '@mui/material/colors';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRight: `1.5px solid ${theme.palette.primary.light}`,
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <VerticalNavbar navbarSize={'80px'} />
            <ColorStain
              color={purple[600]}
              size={'300px'}
              marginTop={'90px'}
              marginLeft={'calc(50% + 20vh)'}
              zIndex={10000}
            />
          </Box>
          <Box sx={{ backgroundColor: theme.palette.primary.main, flexGrow: 1 }}>
            <Navbar borderStyle={`1.5px solid ${theme.palette.primary.light}`} />
            <Container
              maxWidth="xl"
              sx={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: theme.spacing(4) }}
            >
              {/* Rutas */}
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/equipo" element={<Equipo />} />
                <Route path="/casestudy" element={<CaseStudy />} />
                <Route path="/metodology" element={<Metodology />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
