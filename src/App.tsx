import { useState } from 'react';
import './App.css';
import PlusMinusPanel from './components/plusMinus/PlusMinusPanel';
import MathOperations from './components/mathOperations/mathOperations';
import { IconButton, Typography } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { mainOperations } from './utils/polishNotation';

function countBrackets(s: string): boolean {
  let k = 0;
  s.split('').forEach((el) => {
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

  function validInput(cur: string): void {
    const last = mathStr[mathStr.length - 1];

    if (mainOperations.has(cur)) {
      if (mainOperations.has(last)) {
        setMathStr(mathStr.slice(0, -1) + ' ' + cur);
      } else if (last != '(' && mathStr.length > 0) {
        setMathStr(mathStr + ' ' + cur);
      }
    } else if (cur === '(') {
      if (last === '(' || mainOperations.has(last) || mathStr.length === 0) {
        setMathStr(mathStr + ' ' + cur);
      }
    } else if (cur === ')') {
      if (!mainOperations.has(last) && countBrackets(mathStr) && last !== '(') {
        setMathStr(mathStr + ' ' + cur);
      }
    } else {
      setMathStr(mathStr + ' ' + cur);
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
      <div className="card">
        <IconButton
          color="error"
          size="large"
          onClick={() => removeFromBoard()}
        >
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
        <MathOperations addOp={validInput} />

        <PlusMinusPanel addNum={validInput} />
      </div>
    </>
  );
}

export default App;
