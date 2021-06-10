import { BrowserRouter } from 'react-router-dom';
import {ClimateProvider} from './context/ClimateContext';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';


function Root() {
  return (
    <ClimateProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ClimateProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
