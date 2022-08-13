import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Root } from "./utils/Root";
function App() {
    useState(() => {
        console.log("use state called ");
        axios
            .get(`${Root()}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(({ data }) => console.log(data));
    });
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Gel is Editing <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>);
}
export default App;
