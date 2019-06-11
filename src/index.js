import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import LogginPage from './components/App/elements/LogginPage/LogginPage';
import Post from './components/App/elements/Posts/Post';

import { BrowserRouter as Router, Route } from 'react-router-dom';





ReactDOM.render(

      <Router>
          <Route exact path="/" component={LogginPage}  />
          <Route exact path="/posts" component={Post}  />



      </Router>,

  document.querySelector('#root')
);
