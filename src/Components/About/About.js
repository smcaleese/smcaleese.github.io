import React, { Component } from 'react'
import Navigation from '../../Containers/Navigation/Navigation'
import portrait from '../../images/portrait.png'
import facebookLogo from '../../images/facebook.png'
import linkedinLogo from '../../images/linkedin.png'
import githubLogo from '../../images/github.png'
//
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import reactLogo from '../../images/logo.png'
import nodeLogo from '../../images/node.png'
import expressLogo from '../../images/js.png'
import sqlLogo from '../../images/db.svg'
import railsLogo from '../../images/rails.png'
import pythonLogo from '../../images/python.png'
import javaLogo from '../../images/java.png'
import linuxLogo from '../../images/linux.png'
import rapid7Logo from '../../images/rapid7.jpg'
import dcuLogo from '../../images/dcu-logo.png'
//
import './AboutNew.scss'

export default function About() {
    return (
        <div className="about-page">
            <Navigation />
            <LandingSection />
            <InfoSection />
            <Footer />
        </div>
    )
}

function LandingSection() {
    return (
        <section className="landing-section">
            <div className="left-section center">
                <h1>Stephen McAleese</h1>
                <h2>SOFTWARE ENGINEER</h2>
            </div>
            <div className="right-section center">
                <img className="portrait-image" src={portrait} alt="portrait" />
            </div>
        </section>
    )
}

function InfoSection() {
    return (
        <div className="info-section center">
            <History />
            <Skills />
            <Bio />
            <Contact />
        </div>
    )
}

function HistoryCard(props) {
    return (
        <div className="history-card">
            <div className="left center">
                <div className="history-image center">
                    <img src={props.image} />
                </div>
            </div>
            <div className="right">
                <div className="text">
                    <h1>{props.title}</h1>
                    {props.description.map(text =>
                        <p>{text}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

function History() {
    return (
        <div className="section history-section">
            <h1 className="info-title">History</h1>
            <HistoryCard
                title="Rapid7"
                description={[
                    "Software engineering intern working on frontend UI work.",
                    "Technologies used: ReactJS"
                ]}
                image={rapid7Logo}
            />
            <HistoryCard
                title="DCU"
                description={[
                    "2018 - 2022",
                    "Studying Computer Science at DCU."
                ]}
                image={dcuLogo}
            />
        </div>
    )
}

function SmallBox(props) {
    return (
        <div className="tech-stack-small-box">
            <img src={props.image} alt="" />
            <p>{props.text}</p>
        </div>
    )
}

function Skills() {
    return (
        <div className="section skills-section">
            <h1 className="info-title">Skills</h1>
            <div className="small-box-container">
                <SmallBox text="Python" image={pythonLogo} />
                <SmallBox text="Java" image={javaLogo} />
                <SmallBox text="Git" image={githubLogo} />

                <SmallBox text="Javascript" image={expressLogo} />
                <SmallBox text="ReactJS" image={reactLogo} />
                <SmallBox text="NodeJS" image={nodeLogo} />
                <SmallBox text="HTML" image={htmlLogo} />

                <SmallBox text="CSS" image={cssLogo} />
                <SmallBox text="SQL" image={sqlLogo} />
                <SmallBox text="Linux" image={linuxLogo} />
                
            </div>

        </div>
    )
}

function Bio() {
    return (
        <div className="section bio-section">
            <h1 className="info-title">Bio</h1>
            <div className="bio-box">
                <p>
                    I first became interested in programming when I was in 
                    secondary school. Since then my skills and experience 
                    have grown both in breadth in depth. In 2018, I 
                    enrolled in the Computer Science course in DCU and 
                    will graduate in early 2022. My main focus is web 
                    development on both the frontend and backend though 
                    my university course has given me the opportunity to 
                    learn a wide variety of skills such as object-oriented
                    programming, algorithms and datastructures and 
                    functional programming.
                </p>
                <p>
                    Delivering excellent results as a programmer involves 
                    more than just technical ability. I believe the 
                    personality traits I have, including persistance, 
                    passion, a strong work ethic and a collaborative 
                    approach to software development have helped me 
                    excel in the past and will continue to be helpful.
                </p>
            </div>
        </div>
    )
}

function Contact() {
    return (
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
}

function Footer() {
    return (
        <div className="footer">

        </div>
    )
}






/*
<div className="left-grid-box">
                        <div className="left-box center">
                            <figure className="portrait">
                                <img src={portrait} alt="portrait"></img>
                            </figure>
                            <p id="about-me">
                                Hi, my name is Stephen. I'm a full stack web developer from Dublin, Ireland with a love of all
                                things Javascript. I'm currently studying software engineering in Dublin City University
                                and I expect to graduate in 2022.
                            </p>
                            <p id="email">email: stephenmcaleeese11@gmail.com</p>
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
                    </div>
                    <div className="right-grid-box center">
                        <div className="tech-stack-box">
                            <div className="center">
                                <h1>My Tech Stack</h1>
                            </div>
                            <div className="tech-stack-sub-box">
                                <h2>Front End Stack</h2>
                                <div className="small-box-container">
                                    <SmallBox text="HTML" image={htmlLogo} />
                                    <SmallBox text="CSS" image={cssLogo} />
                                    <SmallBox text="ReactJS" image={reactLogo} />
                                </div>
                                <hr />
                            </div>
                            <div className="tech-stack-sub-box">
                                <h2>Back End Stack</h2>
                                <div className="small-box-container">
                                    <SmallBox text="NodeJS" image={nodeLogo} />
                                    <SmallBox text="ExpressJS" image={expressLogo} />
                                    <SmallBox text="SQL" image={sqlLogo} />
                                </div>
                                <hr />
                            </div>
                            <div className="tech-stack-sub-box">
                                <h2>Other technologies</h2>
                                <div className="small-box-container">
                                    <SmallBox text="Ruby on Rails" image={railsLogo} />
                                    <SmallBox text="Python" image={pythonLogo} />
                                    <SmallBox text="Git" image={githubLogo} />
                                </div>
                            </div>
                        </div>
                    </div>
*/