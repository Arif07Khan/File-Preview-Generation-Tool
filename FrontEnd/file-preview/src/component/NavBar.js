import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{position:'sticky',top:'0px'}}>
    <a className="navbar-brand  px-4 rounded-circle mx-2" href="#" style={{background:"#05fc99"}}>
    <i class="fa fa-eye fa-spin fa-1x fa-fw"></i>
<span class="sr-only">Loading...</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ><i class="fa fa-bars" aria-hidden="true"></i>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="home">
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
           Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Register">
            Register
          </NavLink>
        </li>
        
      </ul>
    </div>
  </nav>
  

  )
}

export default NavBar