import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dailes from "./components/Dailes";
import Calculators from "./components/Calculators";
import "./css/App.css";

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
          <Dailes />
        ) : (
          <Calculators />
        )}
      </div>
    </div>
  );
}

export default App;
