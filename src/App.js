import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './Landing/Landing';
import NameGenerator from './NameGenerator/NameGenerator';
import NavBar from './NavBar/NavBar';

// OXFORD DICTONARY API 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={(...props) => <Landing {...props} />} /> 
          <Route exact path="/name-generator" component={(...props) => <NameGenerator {...props} />} /> 
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
