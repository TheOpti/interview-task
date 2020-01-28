import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './pages/Main';
import Success from './pages/Success';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/success" component={Success} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
