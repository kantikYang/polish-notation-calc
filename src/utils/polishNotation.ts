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

const checkWeight = (arr: string[], targ: string) => {
  for (let i = 0; i < arr.length; i++) {
    if (opWeight[targ] >= opWeight[arr[i]]) {
      return false;
    }
  }
};

export const polishNotation = (matshStr: string): string[] => {
  const stack = [];
  const res = [];

  const curStr = matshStr.split(' ');

  for (let i = 0; i < curStr.length; i++) {
    if (Number(curStr[i]) === Number(curStr[i])) {
      res.push(curStr[i]);
    } else if (mainOperations.has(curStr[i])) {
      // if (stack.length === 0 || checkWeight(stack, curStr[i])) {
      //   stack.push(curStr[i]);
      // } else {
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
  }

  while (stack.length > 0) {
    res.push(stack.pop()!);
  }
  return res;
};
