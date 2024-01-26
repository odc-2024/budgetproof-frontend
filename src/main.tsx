import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css';
import '@mantine/core/styles.css';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
