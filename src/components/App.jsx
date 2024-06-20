import { useEffect, useState } from "react";
import Nav from "./Nav";
import Home from "./home/Home";
import Dailies from "./dailies/Dailies";
import Calculators from "./calculators/Calculators";
import "../css/App.css";
import Weeklies from "./weeklies/Weeklies";

function App() {
  const [state, setState] = useState("Maple Home");
  useEffect(() => {}, [state]);

  return (
    <div className="App">
      <Nav setState={setState} />
      <div>
        {state === "Maple Home" ? (
          <Home />
        ) : state === "Dailies" ? (
          <Dailies />
        ) : state === "Weeklies" ? (
          <Weeklies />
        ) : (
          <Calculators />
        )}
      </div>
    </div>
  );
}

export default App;
