import React, { Component } from 'react';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Login from './components/login/loginC';
import Urls from './components/utils/urls/urls';

class App extends Component {
  render() {
    return (
      <div>
          <MenuContainer/>
          <Urls />
          <Login />
      </div>
    );
  }
}

export default App;