import './App.css';
import React, { Component } from "react";

import List from "./components/List";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <List />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default App;
