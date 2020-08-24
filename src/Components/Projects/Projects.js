import React, { Component } from 'react'
import Navigation from '../../Containers/Navigation/Navigation'
import covidForcasterImage from '../../images/covid-forecaster.png'
import jsClockImage from '../../images/js-clock.png'
import chitchatImage from '../../images/chitchat-updated.png'
import './Projects.scss'

class Projects extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <div className="projects-page d-flex flex-column align-items-center">
                    <div className="projects-header">
                        <h1>Projects</h1>
                        <p>some of the things I've recently been working on</p>
                    </div>
                    <div className="projects-list">
                    <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>ChitChat</h2>
                                    <p>A ruby on rails template app. Features: login and signup, creating and deleting pages pages,
                                        commenting on pages</p>
                                    <p>Technologies used: Ruby, Ruby on Rails, HTML and CSS.</p>
                                    <p>Date finished: August 2016.</p>
                                </div>
                                <div className="buttons-container">
                                    <a href="https://chit-chat-test.herokuapp.com/">
                                        <button type="button" className="btn btn-primary">open live app</button>
                                    </a>
                                    <a href="https://github.com/smcaleese/chitchat-linux">
                                        <button type="button" className="btn btn-danger">open source</button>
                                    </a>
                                </div>
                            </div>
                            <figure className="project-image-container center">
                                <a href={chitchatImage}>
                                        <img src={chitchatImage} alt="" />
                                </a>
                            </figure>
                        </div>

                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>Covid Forecaster</h2>
                                    <p>I created this app to predict the number of covid cases expected to occur.</p>
                                    <p>Technologies used: ReactJS, HTML and CSS.</p>
                                    <p>Date finished: April 2020.</p>
                                </div>
                                <div className="buttons-container">
                                    <a href="https://smcaleese.github.io/covid-cases-predictor/">
                                        <button type="button" className="btn btn-primary">open live app</button>
                                    </a>
                                    <a href="https://github.com/smcaleese/covid-cases-predictor">
                                        <button type="button" className="btn btn-danger">open source</button>
                                    </a>
                                </div>
                            </div>
                            <figure className="project-image-container center">
                                <a href={covidForcasterImage}>
                                    <img src={covidForcasterImage} alt="" />
                                </a>
                            </figure>
                        </div>

                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>JS Clock</h2>
                                    <p>A clock and calendar that dynamically shows time passing in real time.</p>
                                    <p>Technologies used: Javascript, HTML and CSS.</p>
                                    <p>Date finished: June 2019.</p>
                                </div>
                                <div className="buttons-container">
                                    <a href="https://smcaleese.github.io/js-clock/">
                                        <button type="button" className="btn btn-primary">open live app</button>
                                    </a>
                                    <a href="https://github.com/smcaleese/js-clock">
                                        <button type="button" className="btn btn-danger">open source</button>
                                    </a>
                                </div>
                            </div>
                            <figure className="project-image-container center">
                                <a href={jsClockImage}>
                                    <img src={jsClockImage} alt="" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
