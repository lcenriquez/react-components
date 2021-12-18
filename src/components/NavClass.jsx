import React from 'react';
import Logo from '../logo.svg'
import './Nav.css';


class NavClass extends React.Component {
  render() {
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
  }
}

export default NavClass;