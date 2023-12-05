import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { polishNotation } from '../../utils/polishNotation';

function PolishNotationConvert() {
  const dispatch = useDispatch();
  const mathExp = useSelector((state: RootState) => state.mathExpression.value);
  const targetStr = polishNotation(mathExp).join(' ');
  return (
    <>
      <div className="card">
        <Paper>{targetStr}</Paper>

        <Paper>{mathExp}</Paper>
      </div>
    </>
  );
}

export default PolishNotationConvert;
