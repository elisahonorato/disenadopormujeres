import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../logo.png'; // Adjust the path to your logo image
import theme from '../theme';

const headerItems = [
  { label: 'Del Proyecto', href: '/about' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Metodología', href: '/metodology' },
  { label: 'Caso de Estudio', href: '/casestudy' },

];

function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ borderBottom: `1.5px solid ${theme.palette.primary.light}` }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
          margin: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} />
            </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 1, padding: theme.spacing(1) }}>    
          {headerItems.map((d, i) => (
            <React.Fragment key={i}>
              <Link to={d.href} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ ml: theme.spacing(2) }}>{d.label}</Typography>
              </Link>
              {i < headerItems.length - 1 && <Typography variant="h6" sx={{ mx: theme.spacing(1) }}>//</Typography>}
            </React.Fragment>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
