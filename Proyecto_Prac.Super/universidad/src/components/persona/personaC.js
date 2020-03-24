import React, { Component } from 'react';
import Persona from './persona';

class PersonaC extends Component {
  render() {
    return (
      <Persona {...this.props}/>  
    );
  }
}

export default PersonaC;