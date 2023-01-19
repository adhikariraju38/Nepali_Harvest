import React from 'react';
import './Navbar.css';
import Logo from '../../img/Logo.png';
import { Link as LinkRoll } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => { 
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="n-name">NepaliHarvest</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <LinkRoll
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </LinkRoll>
            <LinkRoll spy={true} to="SeasonalPicks" smooth={true}>
              <li>SeasonalPicks</li>
            </LinkRoll>
            <LinkRoll spy={true} to="PlantDoctor" smooth={true}>
              <li>PlantDoctor</li>
            </LinkRoll>
            <LinkRoll spy={true} to="topcrops" smooth={true}>
              <li>TopCrops</li>
            </LinkRoll>
            <LinkRoll spy={true} to="Contact" smooth={true}>
              <li>ContactUs</li>
            </LinkRoll>
          </ul>
        </div>
        {/* <button className="button n-button">Login</button> */}
        {!localStorage.getItem('token')?<Link to="/login"><button className="button n-button">Login</button></Link>:<Link to="/" onClick={handleLogout}><button className="button n-button">LogOut</button></Link>}

      </div>
    </div>
  );
};

export default Navbar;
