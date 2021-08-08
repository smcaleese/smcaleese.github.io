import React from 'react'
import Navigation from '../Navigation/Navigation'
import covidForcasterImage from '../../images/covid-forecaster.png'
import jsClockImage from '../../images/js-clock.png'
import chitchatImage from '../../images/chitchat-updated.png'
import whistImage from '../../images/whist.png'
import weatherlyImage from '../../images/weatherly.png'
import appScreenshot1 from '../../images/dcu-intelligent-assistant/assistant.jpg'
import appScreenshot2 from '../../images/dcu-intelligent-assistant/output.jpg'
import appScreenshot3 from '../../images/dcu-intelligent-assistant/map.jpg'
import Project from './Project'
import AppProject from './AppProject'
import './Projects.scss'

const Projects = (props) => (
  <>
    <Navigation />
    <div className="projects-page d-flex flex-column align-items-center">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>some projects I've recently been working on</p>
      </div>
      <div className="projects-list">
        <AppProject 
          title="DCU Intelligent Assistant"
          description="A mobile app for providing useful services to DCU students including class 
          timetables, an interactive map of DCU, assignment reminders
          and real-time bus information."
          technologies="Technologies used: React Native, NodeJS."
          date="Date finished: March 2021"
          liveLink="https://play.google.com/store/apps/details?id=com.chatbot2"
          repoLink="https://github.com/smcaleese/dcu-intelligent-assistant"
          img1={appScreenshot1}
          img2={appScreenshot2}
          img3={appScreenshot3}
        />
        <Project 
          title="Weatherly"
          description="A web app which shows weather information about any location in the world.
          It sources weather data from the Open Weather API."
          technologies="Technologies used: Javascript, HTML, CSS."
          date="Date finished: January 2021"
          liveLink="https://weatherly-online.herokuapp.com"
          repoLink="https://github.com/smcaleese/weatherly"
          img={weatherlyImage}
        />
        <Project 
          title="Whist Card Game"
          description="A single-player implementation of the card game Whist in the browser. There is
          one AI player on your team and two AI players on the opposing team."
          technologies="Technologies used: ReactJS, NodeJS, SocketIO"
          date="Date finished: December 2020"
          liveLink="https://mywhist.herokuapp.com/"
          repoLink="https://github.com/smcaleese/whist-singleplayer"
          img={whistImage}
        />
        <Project 
          title="Covid Forecaster"
          description="Uses an exponential model to predict the total number of future covid cases
          based on the current number of cases and the daily growth rate. Supports multiple
          projections."
          technologies="Technologies used: ReactJS, HTML and CSS."
          date="Date finished: April 2020."
          liveLink="https://smcaleese.github.io/covid-cases-predictor/"
          repoLink="https://github.com/smcaleese/covid-cases-predictor"
          img={covidForcasterImage}
        />
        <Project 
          title="JS Clock"
          description="A real-time clock that uses moving sliders to show the passage of time."
          technologies="Technologies used: Javascript, HTML and CSS."
          date="Date finished: June 2019."
          liveLink="https://smcaleese.github.io/js-clock/"
          repoLink="https://github.com/smcaleese/js-clock"
          img={jsClockImage}
        />
        <Project 
          title="ChitChat"
          description="A web app for creating pages, commenting on them and discussing topics.
          ChitChat is similar to Reddit."
          technologies="Technologies used: Ruby on Rails, HTML and SCSS."
          date="Date finished: August 2016."
          liveLink="https://chit-chat-test.herokuapp.com/"
          repoLink="https://github.com/smcaleese/chitchat-linux/"
          img={chitchatImage}
        />
      </div>
    </div>
  </>
)

export default Projects
