import { Button, Stack, Typography } from '@mui/material';

function MathOperations({ addOp }: { addOp: (n: string) => void }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="warning" onClick={() => addOp('÷')}>
        <Typography variant="h4">÷</Typography>
      </Button>
      <Button variant="contained" color="warning" onClick={() => addOp('×')}>
        <Typography variant="h4">×</Typography>
      </Button>
      <Button variant="contained" color="warning" onClick={() => addOp('−')}>
        <Typography variant="h4">−</Typography>
      </Button>
      <Button variant="contained" color="warning" onClick={() => addOp('+')}>
        <Typography variant="h4">+</Typography>
      </Button>
    </Stack>
  );
}

export default MathOperations;
