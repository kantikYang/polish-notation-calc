import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { calcRpn } from '../../utils/calcRpn';

function CalculateRpn() {
  const exp = useSelector((state: RootState) => state.mathExpression.rpn);
  console.log(exp);
  const allSteps = calcRpn(exp);

  if (!allSteps || exp == '') {
    return <h1></h1>;
  }
  return (
    <>
      <Box
        sx={{
          width: '700px',
          margin: 'auto',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        <Stack direction="column" spacing={4}>
          {allSteps.map((el, i) => {
            if (el.length === 2) {
              return (
                <>
                  <Paper sx={{ padding: '5px' }}>
                    <Typography variant="subtitle1">
                      <b>Step {i + 1}</b>
                    </Typography>
                    <Typography>
                      Символ: {el[0]} - операнд. Кладем в стек.
                    </Typography>
                    <Typography>Стек: {el[1]}</Typography>
                  </Paper>
                </>
              );
            } else {
              return (
                <>
                  <Paper sx={{ padding: '5px' }}>
                    <Typography variant="subtitle1">
                      <b>Step {i + 1}</b>
                    </Typography>
                    <Typography>
                      Символ: {el[0]} - оператор. Берем из стека 2 последних
                      числа и выполняем операцию{' '}
                      {el[1] + ' ' + el[0] + ' ' + el[2]}. Ответ кладем в стек.
                    </Typography>
                    <Typography>Стек: {el[3]}</Typography>
                  </Paper>
                </>
              );
            }
          })}
        </Stack>
      </Box>
    </>
  );
}

export default CalculateRpn;
