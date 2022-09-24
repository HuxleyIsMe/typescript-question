import React from "react";
import "./App.css";
import { Accordian } from "./components/accordian";

function App() {
  return (
    <div className="App">
      {/** As the accordian is marked as type fun, i therefore want only colourful pages to be used */}
      <Accordian type="fun">
        <Accordian.ColourfulPage colour="blue" />
        {/** i want boring page to be like noooooo */}
        <Accordian.BoringPage />
        {/** P tag should not be allowed */}
        <p>haha i shouldnt be here</p>
      </Accordian>
    </div>
  );
}

export default App;
