import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@mui/material'
import Page1 from './components/page1/Page1';
import SignIn from './components/signIn/SignIn';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
