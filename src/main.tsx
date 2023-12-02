import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PolishNotationConvert from './pages/PolishNotation/PolishNotationConvert';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/polishNotation" element={<PolishNotationConvert />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
