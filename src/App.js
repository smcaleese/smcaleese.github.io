import React from 'react'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

ReactGA.initialize("G-MP2K93C8VN")

const App = () => (
  <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  </div>
)

export default App
