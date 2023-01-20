import React, { useState, useRef, useEffect } from "react";
import './NewNav.css'; 
import Logo from '../../img/Logo.png';
import { Link as LinkRoll } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
    
    };
    const links = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    url: "/gallery",
    text: "SeasonalPicks",
  },
  {
    id: 3,
    url: "/events", 
    text: "PlantDoctor",
  },
  {
    id: 4,
    url: "/events", 
    text: "topcrops",
  },

 

  {
    id: 5,
    url: "/contact",
    text: "Contact",
  },
 
];
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <>
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="logo" alt="logo" />
          <span>NepaliHarvest</span>
          <button className="nav-toggle" onClick={toggleLinks}>
            #
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul style={{listStyleType:'none'}} className="links" ref={linksRef}>
            {links.map((link) => {
              const { id,  text } = link;
              return (
                <LinkRoll
                key={id}
              spy={true}
              to={text}
              smooth={true}
              activeClass="activeClass"
            >
              <li>{text}</li>
            </LinkRoll>
                // <li key={id}>
                //   <a href={url}>{text}</a>
                // </li>
              );
            })}
          </ul>
        </div>
        {!localStorage.getItem('token')?<Link to="/login"><button className="button n-button">Login</button></Link>:<Link to="/" onClick={handleLogout}><button className="button n-button">LogOut</button></Link>}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
