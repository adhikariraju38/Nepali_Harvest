import React from 'react';
import './OtherNav.css'
import Logo from '../../img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

const OtherNav = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const goHome = () => {
    navigate('/');
  };
  const goSeasonalProduct = () => {
    navigate('/seasonalproduct');
  };
  const goPlantDoctor = () => {
    navigate('/plantdoctor');
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="logo">
          <img src={Logo} alt="" onClick={goHome} />
        </div>
        <div className="n-name" onClick={goHome}>
          NepaliHarvest
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>

              <li onClick={goHome} >Home</li>

              <li onClick={goSeasonalProduct}>SeasonalPicks</li>


              <li onClick={goPlantDoctor}>PlantDoctor</li>

          </ul>
        </div>
        {/* <button className="button n-button">Login</button> */}
        {!localStorage.getItem('token') ? (
          <Link to="/login">
            <button className="button n-button">Login</button>
          </Link>
        ) : (
          <Link to="/" onClick={handleLogout}>
            <button className="button n-button">LogOut</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OtherNav;
