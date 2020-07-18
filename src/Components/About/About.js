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
//
import './About.scss'

function SmallBox(props) {
    return (
        <div className="tech-stack-small-box">
            <img src={ props.image } alt="" />
            <p>{ props.text }</p>
        </div>
    )
}

class About extends Component {
    render() {
        return(
            <div className="about-page">
                <Navigation />
                <section className="about-section">
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
                </section>
            </div>
        )
    }
}

export default About