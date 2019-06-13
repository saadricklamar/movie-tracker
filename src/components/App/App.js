import React from "react";
import "./App.scss";
import Login from "../../containers/Login/Login";
import Signup from "../../containers/Signup/Signup";
import About from "../About/About";
import MovieContainer from "../../containers/MovieContainer/MovieContainer";
import { Route, Switch, Redirect } from "react-router-dom";


const App = () => {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/MovieContainer" component={MovieContainer} />
          <Route path="/About" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }


export default App;
