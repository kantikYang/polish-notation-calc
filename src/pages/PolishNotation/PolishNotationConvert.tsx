import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function PolishNotationConvert() {
  const dispatch = useDispatch();
  const mathExp = useSelector((state: RootState) => state.mathExpression.value);
  console.log(mathExp + 'fff');
  return (
    <>
      <Paper>{mathExp}</Paper>

      <Paper>{mathExp}</Paper>
    </>
  );
}

export default PolishNotationConvert;
