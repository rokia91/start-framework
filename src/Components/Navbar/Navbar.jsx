import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light   p-2     ">
        <Link className="navbar-brand m-4  text-white fs-3 fw-bold" to="/Home">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end fw-fw-bolder pe-5 "
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/About">
                ABOUT <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/Portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/Contacts">
                CONTACTS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
