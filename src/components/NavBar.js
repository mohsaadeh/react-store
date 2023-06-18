import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS;
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import Logo from './NavLogo.js';
// import './NavBar.css';

function NavBar(){
  const navBarStyle = {
    fontFamily: '"Nunito Sans", sans-serif',
    background:'#f6faf4' 
  };

    return (<>
      <nav className="navbar navbar-expand-lg navbar-light " style={navBarStyle }>
      <div className="container">
        <div className="navbar-brand">
          <Logo/>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex" style={{gap:'33px'}}>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>
        
          </ul>
          </div>

        <div className='nav-icon'>
        <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faHeart} /> 
                
              </a>
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faSearch} /> 
              </a>

              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faShoppingCart} /> 
              </a>
        </div>
      </div>
    </nav>
    </>

    )
}

export default NavBar;