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
console.log(root);

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
                        <Navbar borderStyle={`1.5px solid ${theme.palette.primary.light}`} theme={theme} />
                        <App />
                        <Footer />
                    </Box>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
