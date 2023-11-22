import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';

import theme from './theme.tsx';
import VerticalNavbar from './component/verticalnavbar.tsx'
import Navbar from './component/navbar.tsx'


import Footer from './component/footer.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container
                    sx={{
                        minWidth: '100%',
                        maxWidth: '100%',
                        display: 'flex',
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
                        <Box>
                            <Navbar borderStyle={`1.5px solid ${theme.palette.primary.light}`} theme={theme} />
                        </Box>
                        <App />
                        <Box>
                            <Footer />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
