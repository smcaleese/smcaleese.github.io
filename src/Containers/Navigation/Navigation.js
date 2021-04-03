import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import { FiMenu } from 'react-icons/fi'

// how to implement hamburger menu?
// start by displaying a hamburger menu

export default function Navigation() {
  return (
      <nav className="nav">
        <FiMenu />
      </nav>
  )
}


/*
<div className="top">
          <div className="left-top">
            <h1 className="title">Stephen McAleese</h1>
          </div>
          <div className="right-top">
              <Link to="/" className="nav-link">About</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/resume" className="nav-link">Resume</Link>
          </div>
        </div>
        <div className="bottom-line"></div>
*/