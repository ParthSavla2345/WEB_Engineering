// src/App.js
import React, { useState } from 'react';
import './App.css';
import CSSExample from './components/CSSExample';
import Counter from './components/Counter';
import SPA from './components/SPA';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <h1>Choose an Exercise</h1>
      <div>
        <button onClick={() => setSelectedOption(1)}>Exercise 1: Use CSS in React</button>
        <button onClick={() => setSelectedOption(2)}>Exercise 2: Counter with useState</button>
        <button onClick={() => setSelectedOption(3)}>Exercise 3: E-Learning SPA</button>
      </div>

      {/* Display selected exercise */}
      {selectedOption === 1 && <CSSExample />}
      {selectedOption === 2 && <Counter />}
      {selectedOption === 3 && <SPA />}
    </div>
  );
}

export default App;
