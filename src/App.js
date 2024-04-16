import React, { useState } from 'react';
import './App.css';
import Dash from './component/Dash';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>

      <div>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label" onClick={toggleDarkMode}>
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
      <Dash />
    </div>
  );
}

export default App;