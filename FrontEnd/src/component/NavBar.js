import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'
import photo from "./photo/photo.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{position:'sticky',top:'0px',zIndex:'1'}}>
    <NavLink className="navbar-brand px-3 mx-2 rounded-circle" to="home" title="Home" style={{backgroundColor:"rgb(169, 180, 183)"}}>
    <img src={photo}  width={50} 
      height={50}/>
    </NavLink>
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