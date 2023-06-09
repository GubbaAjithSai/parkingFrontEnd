import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Parking management</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/bookingform">Bookings</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/checkslots">Check Slots</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  );
};

export default Nav;