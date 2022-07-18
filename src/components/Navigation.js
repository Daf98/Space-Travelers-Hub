import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import './styles/Navigation.css';

const Navigation = () => (
  <nav className="navbar">
    <div className="navTitle">
      <img id="logo" src={planet} alt="planet-logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul className="navLinks">
      <li className="navLink">
        <NavLink to="/rockets">Rockets</NavLink>
      </li>
      <li className="navLink">
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li className="navLink">
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
