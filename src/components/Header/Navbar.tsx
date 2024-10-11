import React from 'react';
import { AppBar, Toolbar, Button, Box, Link } from '@mui/material';
import logo from './logo.png';

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '30px',
        padding: '10px 20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        maxWidth: '90%', 
        margin: '20px auto', 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '170px', height: '70px' }} />
        </Box>

        <Box sx={{ display: 'flex', gap: '70px' }}>
          {['Home', 'Pricing', 'FAQ', 'Features'].map((item) => (
            <Link
              key={item}
              href="#"
              underline="none"
              sx={{ color: '#fff', fontSize: '1rem', fontWeight: 500 }}
            >
              {item}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#D20808',
              borderRadius: '20px',
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '5px 20px',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
