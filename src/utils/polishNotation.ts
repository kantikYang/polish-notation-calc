export let mainOperations = new Set(['÷', '×', '−', '+']);

export const polishNotation = (matshStr: string): string[] => {
  const stack = [];
  const res = [];

  const curStr = matshStr.split(' ');

  for (let i = 0; i < curStr.length; i++) {
    if (Number(curStr[i]) === Number(curStr[i])) {
      res.push(curStr[i]);
    } else if (mainOperations.has(curStr[i]) || curStr[i] === '(') {
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
