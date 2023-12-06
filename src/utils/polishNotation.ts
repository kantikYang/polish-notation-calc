import { setRef } from '@mui/material';

export let mainOperations = new Set(['÷', '×', '−', '+']);

interface typeOfWeight {
  [key: string]: number;
}

const opWeight: typeOfWeight = {
  '÷': 3,
  '×': 3,
  '−': 2,
  '+': 2,
  '(': 1,
};

export const polishNotation = (matshStr: string): string[][][] => {
  const stack = [];
  const res = [];

  const allSteps = [];
  const curStr = matshStr.trim().split(' ');

  for (let i = 0; i < curStr.length; i++) {
    if (Number(curStr[i]) === Number(curStr[i])) {
      res.push(curStr[i]);
    } else if (mainOperations.has(curStr[i])) {
      while (
        stack.length > 0 &&
        opWeight[stack[stack.length - 1]] >= opWeight[curStr[i]]
      ) {
        res.push(stack.pop()!);
      }
      stack.push(curStr[i]);
    } else if (curStr[i] === '(') {
      stack.push(curStr[i]);
    } else if (curStr[i] === ')') {
      let j = stack.length - 1;
      while (stack[j] !== '(') {
        res.push(stack.pop()!);
        j--;
      }
      stack.pop();
    }

    allSteps.push([[...res], [...stack]]);
  }

  while (stack.length > 0) {
    res.push(stack.pop()!);
  }

  allSteps.push([[...res], [...stack]]);

  return allSteps;
};
