import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PupProvider from "/home/nicholas/week14/d4/react-context-pups-starter/src/App.js";



ReactDOM.render(

    <PupProvider>
      <App />
    </PupProvider>
 ,
  document.getElementById("root")
);
