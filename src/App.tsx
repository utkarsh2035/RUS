import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';
// import {Button} from '@mui/material'
// import Page1 from './components/page1/Page1';
// import SignIn from './components/signIn/SignIn';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flex: 1 }}> {/* Your main content goes here */} </Box>
      <Footer />
    </Box>
    </div>
  );
}

export default App;
