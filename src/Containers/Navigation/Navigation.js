import React, { useState, useEffect, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import { FiMenu } from 'react-icons/fi'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'

// TODO
// 1. style the menu
// 2. put a menu with it
// 3. figure out how to transition between menus based on the screen size

function useDetectClickOutsideMenu(ref, setMenuOpen) {
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("outside!")
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu)
    }
  })
}

function DesktopMenu(props) {
  return (
    <div className="desktop-menu">
      <Link to="/" className="nav-link">About</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
    </div>
  )
}

function MobileMenu(props) {
  return (
    <div className="mobile-menu center" ref={props.menuRef}>
      {props.menuOpen ?
        <div className="dropdown center" onClick={() => props.setMenuOpen(false)}>
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
        </div>
        :
        <div className="hamburger-menu center" onClick={() => props.setMenuOpen(state => !state)}>
          <FiMenu size="50" />
        </div>
      }
    </div>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useDetectClickOutsideMenu(menuRef, setMenuOpen)

  useState(() => {
    const handleResize = (event) => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  let menu
  if(windowWidth < 1000) {
    menu = <MobileMenu
      setMenuOpen={setMenuOpen}
      menuOpen={menuOpen}
    />
  } else {
    menu = <DesktopMenu />
  }

  return (
    <nav className="nav">
      <div className="top">
        <div className="left-top">
          <h1 className="title">Stephen McAleese</h1>
        </div>
        <div className="right-top">
          { menu }
        </div>
      </div>
      <div className="bottom-line"></div>
    </nav>
  )
}

/*
<MobileMenu 
            menuRef={menuRef} 
            setMenuOpen={setMenuOpen} 
            menuOpen={menuOpen}
          />
*/
