import React, { Component } from 'react';
import Porfesor from './profesor'

class ProfesorC extends Component {
  render() {
    return (
        <Porfesor {...this.props}/>
    );
  }
}

export default ProfesorC;