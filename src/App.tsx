import { useState } from 'react';
import './App.css';
import PlusMinusPanel from './components/plusMinus/PlusMinusPanel';
import MathOperations from './components/mathOperations/mathOperations';
import { IconButton, Card, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

let mainOperations = new Set(['÷', '×', '−', '+']);

function countBrackets(str: string): boolean {
  let k = 0;
  str.split('').forEach((el) => {
    if (el === '(') {
      k++;
    } else if (el === ')') {
      k--;
    }
  });
  return k > 0;
}

function App() {
  const [mathStr, setMathStr] = useState('');

  function gets(cur: string): void {
    const last = mathStr[mathStr.length - 1];

    if (mainOperations.has(cur)) {
      if (mainOperations.has(last)) {
        setMathStr(mathStr.slice(0, -1) + cur);
      } else if (last != '(' && mathStr.length > 0) {
        setMathStr(mathStr + cur);
      }
    } else if (cur === '(') {
      if (last === '(' || mainOperations.has(last) || mathStr.length === 0) {
        setMathStr(mathStr + cur);
      }
    } else if (cur === ')') {
      if (!mainOperations.has(last) && countBrackets(mathStr) && last !== '(') {
        setMathStr(mathStr + cur);
      }
    }
  }

  function removeFromBoard() {
    setMathStr(mathStr.slice(0, -1));
  }

  function resetBoard() {
    setMathStr('');
  }

  return (
    <>
      <IconButton color="error" size="large" onClick={() => removeFromBoard()}>
        <BackspaceIcon fontSize="large" />
      </IconButton>
      <IconButton color="error" size="large" onClick={() => resetBoard()}>
        <RestartAltIcon fontSize="large" />
      </IconButton>
      <div className="outBoard">
        <Typography sx={{ fontSize: 24 }} gutterBottom>
          {mathStr}
        </Typography>
      </div>
      <MathOperations addOp={gets} />
      <div className="card"></div>
    </>
  );
}

export default App;
