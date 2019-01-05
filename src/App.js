import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './containers/Content/Content';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Content />
            <Footer>Test</Footer>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
