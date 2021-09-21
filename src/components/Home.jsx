import React from "react";
import logo from "../logo.svg";
import PopUp from "./popup/PopUp";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to our application!</p>

          <PopUp url="http://localhost:3000/table">Sign Up</PopUp>
        </header>
      </div>
    );
  }
}
