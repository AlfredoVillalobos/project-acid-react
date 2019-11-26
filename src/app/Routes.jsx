import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TweetsContainer from "../containers/TweetsContainer";

export default class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route
          exact 
          path="/"
          component={TweetsContainer}
        />
      </Switch>
    )
  };
}