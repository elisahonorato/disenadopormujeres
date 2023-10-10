import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.tsx';
import Home from './component/home.tsx';
import About from './component/about.tsx';
import Equipo from './component/equipo.tsx';
import CaseStudy from './component/casestudy.tsx';
import Metodology from './component/metodology.tsx';
import Contact from './component/contact.tsx';
import VerticalNavbar from './component/verticalnavbar.tsx';
import ColorStain from './component/colorstain.tsx';
import Footer from './component/footer.tsx';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme.tsx';

import './App.css';
import './fonts.css';
import { purple } from '@mui/material/colors';


function App() {
  console.log('App');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRight: `1.5px solid ${theme.palette.primary.light}`,
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <VerticalNavbar navbarSize={'80px'} />
          </Box>
          <Box>
            <Navbar borderStyle={`1.5px solid ${theme.palette.primary.light}`} />
            {/* Rutas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/casestudy" element={<CaseStudy />} />
              <Route path="/metodology" element={<Metodology />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;