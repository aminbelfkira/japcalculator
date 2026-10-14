import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";
import AminEasterEgg from "./components/AminEasterEgg/AminEasterEgg";

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
      <AminEasterEgg />
    </div>
  );
};

export default App;
