import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';
// import {Button} from '@mui/material'
// import Page1 from './components/page1/Page1';
// import SignIn from './components/signIn/SignIn';
import Navbar from './components/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'
import UserContext, { dataContext } from './context/UserContext';
function App() {
  const data = useContext(dataContext)
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Product' element={<Product/>}/>
        </Routes>
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
