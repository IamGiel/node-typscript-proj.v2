import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Root } from "./utils/Root";
import Button from 'react-bootstrap/Button';

function App() {
    useState(() => {
        console.log("use state called ", Root());
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
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
       <div>
        <p>
            Gel is here! ! !<code>src/App.tsx</code>  and save to reload.
          </p>
       </div>
       <div>
        <Button variant="primary">Primary</Button>{' '}
       </div>
      </header>
    </div>);
}
export default App;
