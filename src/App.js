import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Nevber from './Component/Home/Nevber/Nevber';


function App() {


  return (
    <Router>

      <Switch>
        <Route path="/">
          <Nevber></Nevber>
        </Route>
        <Route  path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
