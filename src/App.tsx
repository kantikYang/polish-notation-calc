import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PlusMinusPanel from './components/plusMinus/PlusMinusPanel';
import MathOperations from './components/mathOperations/mathOperations';

function App() {
  const [count, setCount] = useState(0);
  function gets(n: number | string): void {
    console.log(n);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">{/* <PlusMinusPanel addNum={gets} /> */}</div>
      <MathOperations addOp={gets} />
    </>
  );
}

export default App;
