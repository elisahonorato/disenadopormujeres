import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home'
import About from './component/about'
import Equipo from './component/equipo';
import CaseStudy from './component/casestudy';
import Metodology from './component/metodology';

import { ThemeProvider, CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from './logo.png';
import theme from './theme'; // Import the theme you created
import './App.css';
import './fonts.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <AppBar position="static" elevation={0} sx={{ width: '50px', backgroundColor: theme.palette.primary.main, justifyContent: 'flex-end', display: 'flex', flexDirection: 'column',  borderRight: `1.5px solid ${theme.palette.primary.light}`}}>
            {/* Left box */}
          </AppBar>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: theme.palette.primary.main, paddingTop: theme.spacing(4)}}>
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
