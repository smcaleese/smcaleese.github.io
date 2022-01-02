import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import Navigation from '../Navigation/Navigation'
import face from '../../images/face-6.jpg'
import facebookLogo from '../../images/facebook.png'
import linkedinLogo from '../../images/linkedin.png'
import githubLogo from '../../images/github.png'
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import reactLogo from '../../images/logo.png'
import nodeLogo from '../../images/node.png'
import expressLogo from '../../images/js.png'
import sqlLogo from '../../images/db.svg'
import pythonLogo from '../../images/python.png'
import javaLogo from '../../images/java.png'
import linuxLogo from '../../images/linux.png'
import rapid7Logo from '../../images/rapid7.jpg'
import dcuLogo from '../../images/dcu-logo.png'
import './About.scss'

const Description = () => (
  <div className="landing-card center-horizontally">
    <div className="welcome-message">
      <p>Hi, my name is Stephen and I'm studying Computer Science in DCU. I'm in 4th year and expect to graduate in 2022.</p>
      <p>
        I previously worked at Rapid7 as a Software Engineering intern. Some side projects I've previous worked on can be found in the projects
        section of this website or my GitHub account. I'm interested in web development, programming and artificial intelligence and I would like to
        grow my skills in those fields.
      </p>
      <p>
        In my free time, I also like to spend time writing and reading.
      </p>
    </div>
    <img className="portrait-image" src={face} alt="portrait" />
  </div>
)

const LandingSection = () => (
  <section className="landing-section center">
    <Description />
    <Contact />
  </section>
)

const Contact = () => (
  <div className="section contact-section">
    <h1 className="info-title">Contact</h1>
    <p className="email">email: stephenmcaleese11@gmail.com</p>
    <div className="soc-images">
      <a href="https://www.facebook.com/stephen.mcaleese.77">
        <img src={facebookLogo} className="soc-icon-image" alt="facebook" />
      </a>
      <a href="https://www.linkedin.com/in/stephen-mc-aleese-ab8585176/">
        <img src={linkedinLogo} className="soc-icon-image" alt="linked in" />
      </a>
      <a href="https://github.com/smcaleese">
        <img src={githubLogo} className="soc-icon-image" alt="github" />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer"></div>
)

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <div className="about-page">
      <Navigation />
      <LandingSection />
      <Footer />
    </div>
  )
}

export default About