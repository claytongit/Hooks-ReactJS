import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function useState() {

  const [reverse, setReverse] = useState(false);
  const [ counter, setCounter ] = useState(0);

  const reverseClass = reverse ? 'reverse' : '';

  const handleReverse = () => {
    setReverse((prevReverse) => !prevReverse); 
  }

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={ `App-logo ${ reverseClass }` } alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
          type="button" 
          onClick={ handleCounter } >
          Somar
        </button>
        <h1>Contador: { counter }</h1>
        <button 
          type="button" 
          onClick={ handleReverse } >
          { reverse ? 'Girar normal' : 'Girar ao contrario' }
        </button>
      </header>
    </div>
  );
}

export default App;
