import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Dashboard from './Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
