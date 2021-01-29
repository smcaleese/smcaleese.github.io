import React, { Component } from 'react'
import Navigation from '../../Containers/Navigation/Navigation'
import covidForcasterImage from '../../images/covid-forecaster.png'
import jsClockImage from '../../images/js-clock.png'
import chitchatImage from '../../images/chitchat-updated.png'
import whistImage from '../../images/whist.png'
import weatherlyImage from '../../images/weatherly.png'
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
                        <p>note: some project live apps might take up to 30 seconds to load</p>
                    </div>
                    <div className="projects-list">
                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>Weatherly</h2>
                                    <p>
                                        A web app which shows weather information about any location in the world.
                                        It sources weather data from the Open Weather API.
                                    </p>
                                    <p>Technologies used: Javascript, HTML, CSS.</p>
                                    <p>Date finished: January 2021</p>
                                </div>
                                <div className="buttons-container">
                                    <a href="https://weatherly-online.herokuapp.com">
                                        <button type="button" className="btn btn-primary">open live app</button>
                                    </a>
                                    <a href="https://github.com/smcaleese/weatherly">
                                        <button type="button" className="btn btn-danger">open source</button>
                                    </a>
                                </div>
                            </div>
                            <figure className="project-image-container center">
                                <a href={weatherlyImage}>
                                    <img src={weatherlyImage} alt="" />
                                </a>
                            </figure>
                        </div>

                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>Whist Card Game</h2>
                                    <p>
                                        A single-player implementation of the card game Whist in the browser. There is
                                        one AI player on your team and two AI players on the opposing team.
                                    </p>
                                    <p>Technologies used: ReactJS, NodeJS, SocketIO</p>
                                    <p>Date finished: December 2020</p>
                                </div>
                                <div className="buttons-container">
                                    <a href="https://mywhist.herokuapp.com/">
                                        <button type="button" className="btn btn-primary">open live app</button>
                                    </a>
                                    <a href="https://github.com/smcaleese/whist-singleplayer">
                                        <button type="button" className="btn btn-danger">open source</button>
                                    </a>
                                </div>
                            </div>
                            <figure className="project-image-container center">
                                <a href={whistImage}>
                                        <img src={whistImage} alt="" />
                                </a>
                            </figure>
                        </div>

                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>ChitChat</h2>
                                    <p>A web app for creating pages, commenting on them and discussing topics.
                                        ChitChat is similar to Reddit.</p>
                                    <p>Technologies used: Ruby on Rails, HTML and SCSS.</p>
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
                                <a href={weatherlyImage}>
                                        <img src={chitchatImage} alt="" />
                                </a>
                            </figure>
                        </div>

                        <div className="project">
                            <div className="project-description-box center">
                                <div className="project-description">
                                    <h2>Covid Forecaster</h2>
                                    <p>Uses an exponential model to predict the total number of future covid cases
                                        based on the current number of cases and the daily growth rate. Supports multiple
                                        projections.
                                    </p>
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
                                    <p>A real-time clock that uses moving sliders to show the passage of time.</p>
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
