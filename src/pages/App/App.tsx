import { useState } from 'react';
import './App.css';
import PlusMinusPanel from '../../components/plusMinus/PlusMinusPanel';
import MathOperations from '../../components/mathOperations/mathOperations';
import { IconButton, Typography, Button, Stack } from '@mui/material';
import BackspaceIcon from '@mui/icons-material/Backspace';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { mainOperations } from '../../utils/polishNotation';

import { useDispatch, useSelector } from 'react-redux';
import { addExpression, resetExpressoin } from '../../redux/features/mathSlice';
import { RootState } from '../../redux/store';

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
  const count = useSelector((state: RootState) => state.mathExpression.value);
  const [mathStr, setMathStr] = useState(count);
  const dispatch = useDispatch();

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
      if (mainOperations.has(last) || mathStr.length === 0 || last === '(') {
        if (Number(cur) < 0) {
          setMathStr(mathStr + ' ' + '(' + ' ' + cur + ' ' + ')');
        } else {
          setMathStr(mathStr + ' ' + cur);
        }
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
      <div className="card">
        <Stack direction="row" spacing={4}>
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
        </Stack>
        <div className="outBoard">
          <Typography sx={{ fontSize: 24 }} gutterBottom>
            {mathStr}
          </Typography>
        </div>
        <MathOperations addOp={validInput} />

        <PlusMinusPanel addNum={validInput} />

        <Button onClick={() => dispatch(addExpression(mathStr))}>
          Положить в store
        </Button>
        <Button onClick={() => console.log(count)}>print</Button>
      </div>
    </>
  );
}

export default App;
