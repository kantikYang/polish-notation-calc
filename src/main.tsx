import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PolishNotationConvert from './pages/PolishNotation/PolishNotationConvert';
import { AppBar, Stack, Toolbar, Button } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Stack
              direction="row"
              spacing={12}
              justifyContent="center"
              sx={{ width: '100%' }}
            >
              <Link to="/">
                <Button variant="text" color="warning">
                  home
                </Button>
              </Link>
              <Link to="/polishNotation">
                <Button variant="contained">polishNotation</Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/polishNotation" element={<PolishNotationConvert />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
