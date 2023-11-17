import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PlusMinusPanel from './components/plusMinus/PlusMinusPanel';
import MathOperations from './components/mathOperations/mathOperations';
import { IconButton, Card, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
function App() {
  const [mathStr, setMathStr] = useState(' ');

  function gets(n: number | string): void {
    setMathStr(mathStr + n);
  }

  function removeFromBoard() {
    setMathStr(mathStr.slice(0, -1));
  }

  return (
    <>
      <IconButton color="error" size="large" onClick={() => removeFromBoard()}>
        <BackspaceIcon fontSize="large" />
      </IconButton>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div className="outBoard">
        <Typography sx={{ fontSize: 24 }} gutterBottom>
          {mathStr}
        </Typography>
      </div>
      {/* <div className="card"><PlusMinusPanel addNum={gets} /></div> */}
      <MathOperations addOp={gets} />
    </>
  );
}

export default App;
