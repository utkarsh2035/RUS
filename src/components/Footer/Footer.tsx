import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#090233', // Change the background color
        color: 'white',
        padding: '1rem 0',
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>
        <Box mt={1}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>{' '}
          |{' '}
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>{' '}
          |{' '}
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
