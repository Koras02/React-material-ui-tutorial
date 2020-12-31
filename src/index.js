import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './Hello';
import './index.css';
import MenuPopupState from './MenuPopupState';
import reportWebVitals from './reportWebVitals';
// import RightClickopen from './RightClickopen';

ReactDOM.render(
  <React.StrictMode>
     <MenuPopupState />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
