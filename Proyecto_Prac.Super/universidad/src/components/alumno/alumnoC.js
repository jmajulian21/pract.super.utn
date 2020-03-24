import React, { Component } from 'react';
import Alumno from './alumno';

class AlumnoC extends Component {
  render() {
    return (
      <div>
            <Alumno {...this.props}/>
      </div>
    );
  }
}

export default AlumnoC;