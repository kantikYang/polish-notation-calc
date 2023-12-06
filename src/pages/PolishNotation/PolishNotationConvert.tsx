import { Box, Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { polishNotation } from '../../utils/polishNotation';
import { addRpn } from '../../redux/features/mathSlice';

function PolishNotationConvert() {
  const dispatch = useDispatch();
  const mathExp = useSelector((state: RootState) => state.mathExpression.value);
  if (mathExp === '') return <h3></h3>;
  const allSteps = polishNotation(mathExp);
  dispatch(addRpn(allSteps[allSteps.length - 1][0]));
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
            const res = el[0].join(' ') || ' ';
            const stack = el[1].join(' ') || ' ';
            return (
              <div key={i}>
                <Paper sx={{ padding: '5px' }}>
                  <Typography variant="subtitle1">
                    <b>Step {i + 1}</b>
                  </Typography>
                  <Typography>Выходная строка: {res}</Typography>
                  <Typography>Стек: {stack}</Typography>
                </Paper>
              </div>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}

export default PolishNotationConvert;
