import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
 <BrowserRouter>
  <App title="TravGram" />
 </BrowserRouter>,
  document.querySelector('#root')
);
