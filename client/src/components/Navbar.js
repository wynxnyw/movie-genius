import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {routes} from "../app/router/routes";

function Navbar() {
  const [click, setClick]  = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Movie Genius <i className="fas fa-film" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {routes.map(route => {
              if (route.path === '/') {
                return null
              }
              return (
                <li className='nav-item'>
                  <Link to={route.path} className='nav-links' onClick={closeMobileMenu}>
                    {route.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;