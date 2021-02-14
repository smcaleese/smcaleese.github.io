import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'

const root = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={root + "/"} component={About} />
          <Route path={root + "/projects"} component={Projects} />
          <Route path={root + "/resume"} component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App