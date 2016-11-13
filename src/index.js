import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import App from './App';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
const theme = {
  primary: 'darkslategrey',
  gradient: 'blurry_beach',
};
const Root = () => (
  <ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
