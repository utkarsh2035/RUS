import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'
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
    </div>
  );
}

export default App;
