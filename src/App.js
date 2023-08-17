import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home'
import About from './component/about'
import Equipo from './component/equipo';
import CaseStudy from './component/casestudy';
import Metodology from './component/metodology';

import { ThemeProvider, CssBaseline, Container, Box, Grid } from '@mui/material';
import logo from './logo.png';
import theme from './theme'; // Import the theme you created
import './App.css';
import './fonts.css'
import VerticalNavbar from './component/verticalnavbar';
import { purple } from '@mui/material/colors';
import ColorStain from './component/colorstain';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <ColorStain color={purple[600]} size={'300px'} marginTop={'90px'} marginLeft={'calc(50% + 200px)'} zIndex={10000}/>
          {/* Smaller rectangle on the left */}
          <Box sx={{backgroundColor : theme.palette.primary.main, borderRight: `1.5px solid ${theme.palette.primary.light}`}}>
            <VerticalNavbar navbarSize={'80px'}/>
            {/* Content for the rectangle */}
          </Box>
          <Box sx={{ backgroundColor: theme.palette.primary.main, flexGrow: 1 }}>
            <Navbar borderStyle={`1.5px solid ${theme.palette.primary.light}`} />
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', flex: 1, paddingTop: theme.spacing(4) }}>
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
