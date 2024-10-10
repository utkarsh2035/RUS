import React, { useState } from 'react'
import './Navbar.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { getDialogContentTextUtilityClass } from '@mui/material';
const Navbar = () => {
    const [isDark, setDark] = useState(true)
    const chnageTheme = ()=>{
      setDark(!isDark)
      document.body.style.backgroundColor = isDark ? "black": "white"
    }
  return (
    <div className='navbar'>
      <div className="logo">
        RUS
      </div>
      <div className="menu">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Services</h3>
        <h3>Contact Us</h3>
      </div>
      <div className="mode" onClick={chnageTheme}>
        {isDark? <DarkModeIcon/> : <WbSunnyIcon/>}
      </div>
    </div>
  )
}

export default Navbar
