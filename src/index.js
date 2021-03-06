import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // uses an HTML node to replace it with JSX
// creates as instance of your App component
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // where the applications enters your HTML ie public/index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
