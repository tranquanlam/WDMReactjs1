import React, { Component } from 'react';
import '../css/index.css';

import DieuHuong from './router/DieuHuong';
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <DieuHuong />
         
        </div>
      </Router>
    );
  }
}

export default App;
