const calculate = {
  '÷': (a: number, b: number): number => a / b,
  '×': (a: number, b: number): number => a * b,
  '−': (a: number, b: number): number => a - b,
  '+': (a: number, b: number): number => a + b,
};

type CalculationStep = string[] | (number | string | '÷' | '×' | '−' | '+')[];
type StepsArray = CalculationStep[];

export const calcRpn = (matshStr: string): StepsArray | undefined => {
  const stack: number[] = [];

  const allSteps = [];
  const curStr = matshStr;

  for (let i = 0; i < curStr.length; i++) {
    if (Number(curStr[i]) === Number(curStr[i])) {
      stack.push(Number(curStr[i]));
      allSteps.push([curStr[i], [...stack].join(' ')]);
    } else {
      const last = stack.pop()!;
      const preLast = stack.pop()!;

      if (last === undefined || preLast === undefined) {
        console.error('Not enough operands in the stack.');
        return undefined;
      }

      const operator = curStr[i] as keyof typeof calculate;
      stack.push(calculate[operator](last, preLast));

      allSteps.push([operator, last, preLast, [...stack].join(' ')]);
    }
  }

  if (stack.length !== 1) {
    console.error('Invalid expression.');
    return undefined;
  }

  return allSteps;
};
