import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';
import Contact from './containers/Contact/Contact';

export default (
  <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>
        <Route path='/projects' component={Projects}/>
        <Route path='/aboutMe' component={AboutMe}/>
        <Route path='/contact' component={Contact}/>
      </Route>
  </Router>

);
