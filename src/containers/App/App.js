import React from "react";
import "./App.scss";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import { Route, Switch, Redirect } from "react-router-dom";


const App = () => {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/MovieContainer" component={MovieContainer} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }


export default App;
