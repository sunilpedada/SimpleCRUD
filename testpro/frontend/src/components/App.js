import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import HomePage from "./page-1";
import updateDelete from "./page-2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/updateDelete" component={updateDelete}/>
            </Switch>
            </Router>
      
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);