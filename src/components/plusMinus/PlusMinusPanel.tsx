import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';

function PlusMinusPanel() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack alignItems="center" spacing={4}>
        <Button
          color="secondary"
          onClick={() => setCount(Math.floor(Math.random() * 1000) - 500)}
        >
          <Typography variant="body1">Сгенерировать</Typography>
        </Button>

        <Stack direction="row" spacing={12}>
          <Button color="secondary" onClick={() => setCount(count / 2)}>
            <Typography variant="body1">Поделить</Typography>
          </Button>

          <Button color="secondary" onClick={() => setCount(count * count)}>
            <Typography variant="body1">Квдрат</Typography>
          </Button>
        </Stack>

        <Stack direction="row" width="100%" justifyContent="space-between">
          <IconButton color="secondary" onClick={() => setCount(count - 1)}>
            <RemoveIcon />
          </IconButton>

          <Button size="large" variant="outlined">
            <Typography variant="h6">{count}</Typography>
          </Button>

          <IconButton color="secondary" onClick={() => setCount(count + 1)}>
            <AddIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={12}>
          <Button color="secondary" onClick={() => setCount(count - 0.1)}>
            <Typography variant="body1">Чуть уменьшить</Typography>
          </Button>

          <Button color="secondary" onClick={() => setCount(count + 0.1)}>
            <Typography variant="body1">Чуть увеличить</Typography>
          </Button>
        </Stack>

        <Button color="secondary" onClick={() => setCount(0)}>
          <Typography variant="body1">Сброс</Typography>
        </Button>
      </Stack>
    </>
  );
}

export default PlusMinusPanel;
