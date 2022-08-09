import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-light bg-dark rounded-circle" href="#">
    <i class="fa fa-eye px-4" aria-hidden="true"></i>
    </a>
    <button
      className="navbar-toggler bg-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="register">
           Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            to="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar