import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../New.css";
import "../Layout.css";
const SecondMenu = () => {
  const [windDim, detectWindW] = useState({
    winddowWid: window.innerWidth,
  }
  )
  const detectSize = () => {
    detectWindW({
      winddowWid: window.innerWidth,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windDim])
  return (
    <div>
      <header class="header">
        <section class="flex">
          <NavLink to="/">
            <a class="logo">
              Mercado Escolar
            </a>
          </NavLink>

          <nav class="navbar">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
          </nav>

          {windDim.winddowWid < 769 &&
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa fa-bars"></i>
            </button>
            <div class="dropdown-content">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/blogs">Blog</NavLink></li>
            </div>
          </div>
          }

          <div class="icons">
          <div className="lefticons">
            <NavLink to="/SearchPage">
              <i class="fas fa-search"></i>
            </NavLink>
              <NavLink to="/CartPage"> 
              <div id="user-btn" class="fas fa-shopping-cart">
                <span>(3)</span>
              </div>
              </NavLink>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                <i class="fa fa-user"></i>
              </button>
              <div class="dropdown-content">
                <li><NavLink to="/ProfilePage">Profile</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                <i class="fa fa-sign-in"></i>
              </button>
              <div class="dropdown-content">
                <li><NavLink to="/Login">Login</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Outlet/>
    </div>
  )
}

export default SecondMenu
