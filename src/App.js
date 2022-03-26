import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, { useState } from 'react';

function App() {
  const [ boxGenerator, setColors ] = useState([]);

  return (
    <div className="App">
      <h1>Color Box Generator</h1>
      <Form boxGenerator={ boxGenerator } setColors={ setColors }/>
      <Display boxGenerator={ boxGenerator }/>
    </div>
  );
}

export default App;
