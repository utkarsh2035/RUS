import React, { useState } from 'react'
import './Navbar.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { getDialogContentTextUtilityClass } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isDark, setDark] = useState(true)
    const chnageTheme = ()=>{
      setDark(!isDark)
      document.body.style.backgroundColor = isDark ? "black": "white"
      document.body.style.color = isDark ? "black": "white"
    }
  return (
    <div className='navbar'>
      <div className="logo">
        RUS
      </div>
      <div className="menu">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
        <Link to="/product"><h3>Product</h3></Link>
      </div>
      <div className="mode" onClick={chnageTheme}>
        {isDark? <DarkModeIcon/> : <WbSunnyIcon/>}
      </div>
    </div>
  )
}

export default Navbar
