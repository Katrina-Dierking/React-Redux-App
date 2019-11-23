import React from 'react';
import NumberFacts from './components/NumberFacts';
import styled from 'styled-components';
import './App.css';


const Container = styled.div`
font-family: The Wild Hammers;
font-size:2.2rem;
border: .5px solid white;
padding: 3%;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <h2>Coolest Number Facts Ever</h2>
       <NumberFacts />
       </Container>
      </header>
    </div>
  );
}

export default App;
