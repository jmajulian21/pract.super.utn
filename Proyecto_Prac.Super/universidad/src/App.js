import React, { Component } from 'react';
import { Grid,Button } from '@material-ui/core';
import './App.css';
import MenuContainer from './components/menu/MenuContainer';
import Login from './components/login/loginC';
import Urls from './components/utils/urls/urls';
import { withRouter } from "react-router-dom";

class App extends Component {
  ir = to => {
    this.props.history.push(to);
  }

  openAdminMenu = () => {
    localStorage.setItem('idTipoPersona', 1);
    this.ir("/")
  }
  openprofesorMenu = () => {
    localStorage.setItem('idTipoPersona', 2);
    this.ir("/")
  }

  opensecretariaMenu = () => {
    localStorage.setItem('idTipoPersona', 3);
    this.ir("/")
  }

  render() {
    return (
      <div>
          <MenuContainer/>
          <Urls />
          <Login />
          <Grid item>
                 <Button color="inherit"  onClick={this.openAdminMenu}>Admin</Button>
                 <Button color="inherit" onClick={this.openprofesorMenu}>Profesor</Button>
                 <Button color="inherit" onClick={this.opensecretariaMenu}>Secretaria</Button>
          </Grid>
      </div>
    );
  }
}

//
export default withRouter (App);