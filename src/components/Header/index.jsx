import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
  return(
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        <div className="navbar-brand"><h2>Books</h2></div>
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink to="/" className="nav-link">Main</NavLink></li>
          <li className="nav-item"><NavLink to="/books" className="nav-link">Books</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;