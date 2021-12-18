import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg'
import './Nav.css';


class NavClass extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/">
          <span className="navbar-brand">
            <img id="logo" src={Logo} width="40" height="40" alt="" />
            <span>React <b>review</b></span>
          </span>
        </Link>
        <div className="navbar-links">
          <Link to="/">Dummy link 1</Link>
          <Link to="/">Dummy link 2</Link>
        </div>
      </nav>
    );
  }
}

export default NavClass;