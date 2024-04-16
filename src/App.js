import React, { useState } from "react";
import "./App.css";
import Dash from "./component/Dash";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Dash modetoggle={toggleDarkMode} />
    </div>
  );
}

export default App;
