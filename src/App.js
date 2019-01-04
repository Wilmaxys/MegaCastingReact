import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './containers/Content/Content';
import Navbar from './components/Navbar/Navbar'
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Content />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
