import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import './styles/Navigation.css';

const Navigation = () => (
  <>
    <nav className="navbar">
      <div className="navTitle">
        <img id="logo" src={planet} alt="Logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="navLinks">
        <li className="navLink">
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li className="navLink">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <div id="separator" />
        <li className="navLink">
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
    <div id="horizontal" />
  </>
);

export default Navigation;
