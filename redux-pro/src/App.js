import React from 'react';
import NumberFacts from './components/NumberFacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Coolest Number Facts Ever</h2>
       <NumberFacts />
      </header>
    </div>
  );
}

export default App;
