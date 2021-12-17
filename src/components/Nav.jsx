import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../logo.svg'
// import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">
        <img id="logo" src={Logo} width="40" height="40" alt="" />
        <span>React <b>review</b></span>
      </span>
      <div className="navbar-links">
        <a href="#">Dummy link 1</a>
        <a href="#">Dummy link 2</a>
      </div>
    </nav>
  );
};

export default Nav;
