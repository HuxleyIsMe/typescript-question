import React from "react";
import "./App.css";
import { Accordian, ColourFulPage, BoringPage } from "./components/accordian";

function App() {
  return (
    <div className="App">
      <ColourFulPage colour="blue" />
      {/** As the accordian is marked as type fun, i therefore want only colourful pages to be used */}
      <Accordian type="fun">
        <ColourFulPage colour="blue" />
        {/** i want boring page to be like noooooo */}
        <BoringPage />
      </Accordian>
    </div>
  );
}

export default App;
