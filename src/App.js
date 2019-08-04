import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Maxx",
      id: "101"
    };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "Jaeha", id: "222" });
    }, 2000);
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h2>Your Id is {this.state.id}</h2>
      </div>
    );
  }
}

export default App;
