import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
