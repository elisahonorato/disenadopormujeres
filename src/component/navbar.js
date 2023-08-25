import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.png';
import theme from '../theme';
import logoSmall from '../assets/navbar/small_logo.png';

const headerItems = [
  { label: 'Del Proyecto', href: '/about' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Metodología', href: '/metodology' },
  { label: 'Caso de Estudio', href: '/casestudy' },
];

function Navbar({ borderStyle }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const enoughSpaceForNavigation = !isSmallScreen || headerItems.every(item => item.label.length <= 6);

  return (
    <AppBar position="sticky" elevation={0} sx={{ borderBottom: borderStyle, paddingTop: theme.spacing(2) }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1),
            marginBottom: isSmallScreen ? theme.spacing(1) : 0,
            maxWidth: isSmallScreen ? '100%' : 'auto',
          }}
        >
          <Link to="/" className="logo-link">
            <img
              src={isSmallScreen ? logoSmall : logo}
              alt="Logo"
              style={{ maxHeight: isSmallScreen ? '80px' : '50px', width: 'auto' }}
            />
          </Link>
        </Box>
        
        {!enoughSpaceForNavigation && (
          <IconButton
            color="inherit"
            aria-label="Abrir menú"
            onClick={toggleMenu}
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            alignContent: 'center',
            flexWrap: isMenuOpen || !isSmallScreen ? 'wrap' : 'nowrap',
            padding: theme.spacing(1),
            maxWidth: isSmallScreen ? '100%' : theme.breakpoints.values.lg,
          }}
        >
          {(isMenuOpen || !isSmallScreen) &&
            headerItems.map((d, i) => (
              <React.Fragment key={i}>
                <Link
                  to={d.href}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography variant="h3" sx={{
                     ml: theme.spacing(1), 
                     color: theme.palette.primary.dark,
                      '&:hover': {
                        color: theme.palette.primary.purple,
                      },
                     }}>{d.label}</Typography>
                </Link>
                {i < headerItems.length - 1 && <Typography variant="h3" sx={{ mx: theme.spacing(1) }}>{'//'}</Typography>}
              </React.Fragment>
            ))}
            <Link to={'/contact'} style={{textDecoration: 'none',}}> 
              <Box
                sx={{
                  display: 'inline-block',
                  paddingTop: '6px',
                  paddingBottom: '3px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  ml: theme.spacing(5),
                  borderRadius: theme.spacing(0.1),
                  backgroundColor: 'transparent',
                  border: `1.8px solid ${theme.palette.primary.dark}`, 
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: 'white',
                    
                  },

                }}
              >
                <Typography variant="h3" sx={{ color: 'black' }}>Contacto</Typography>
              </Box>
            </Link>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
