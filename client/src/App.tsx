import * as React from "react";
import "./App.css";
import axios from "axios";
import { Root } from "./utils/Root";
import { useState } from "react";

function App() {
  useState(() => {
    console.log("use state called ");
    axios
      .get(
        `${Root()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => console.log(data));
  });
  return (
    <div className="App">
      <header className="App-header">
        
       <div>
        <p>
            Gel from tsx 8<code>src/App.tsx</code> and save to reload.
          </p>
       </div>
      </header>
    </div>
  );
}

export default App;
