import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import theme from './theme.tsx';

import './App.css';
import './fonts.css';
import { purple } from '@mui/material/colors';


function App() {
    console.log('App');
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/metodology" element={<Metodology />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

    );
}

export default App;