import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid } from '@mui/material';
import icono1 from '../assets/iconos/icono-01.png';
import icono2 from '../assets/iconos/icono-02.png';
import theme from '../theme';

function VerticalNavbar({ navbarSize }) {
  return (
    <AppBar position="sticky" elevation={0} sx={{ width: navbarSize, backgroundColor: theme.palette.primary.main, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
        <Grid item sx={{ position: 'fixed', width: navbarSize, height: navbarSize }}>
          <Link to="/about" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={icono2} alt="icono1" style={{ width: '100%', height: 'auto', opacity: 0.4 , padding: '30%', alignItems: 'center'}} />
          </Link>
        </Grid>
        <Grid item sx={{ flexGrow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateY(+350%)' }}>
          {/* Updated alignment and padding styles */}
          <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={icono1} alt="icono" style={{ width: '100%', height: 'auto', opacity: 0.4, padding: '30%', alignItems: 'center' }} />
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default VerticalNavbar;
