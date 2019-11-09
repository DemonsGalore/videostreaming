import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Client from './Client';
import Streamer from './Streamer';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><NavLink to="/">Client</NavLink></li>
          <li><NavLink to="/streamer">Streamer</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Client} />
          <Route exact path="/streamer" component={Streamer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
