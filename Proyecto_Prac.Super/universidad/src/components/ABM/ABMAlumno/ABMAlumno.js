import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Alumno from '../../alumno/alumnoC';
import { Grid, Button } from '@material-ui/core';
import { dtoPersona } from '../../../model/dto/Persona';
import { dtoAlumno } from '../../../model/dto/Alumno';

var url = 'http://localhost:8081/alumnos';
var data;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function actualizarBody() {
  data = {
    datoAlumno: {
      nombre: dtoPersona.nombres,
      apellido: dtoPersona.apellido,
      tipoDoc: dtoPersona.tipoDoc,
      nroDoc: dtoPersona.nroDoc,
      fechNacimiento: dtoPersona.fechNacimiento,
      sexo: dtoPersona.sexo,
      direccion: dtoPersona.direccion,
      piso: dtoPersona.piso,
      codPostal: dtoPersona.codPostal,
      localidad: dtoPersona.localidad,
      telefono: dtoPersona.telefono,
      celular: dtoPersona.celular,
      email: dtoPersona.email,
      detalle: {
        legajo: dtoAlumno.legajo,
        egresadoDe: dtoAlumno.egresadoDe,
        titulo: dtoAlumno.titulo,
        promedio: dtoAlumno.promedio
      }
    }
  };
}

class AlumnoC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legajo: null
    }

  }
  
  componentDidMount() {
    fetch('http://localhost:8081/alumnos/legajo')
    .then(response => response.json())
    .then(data => { this.setState({ legajo: data.legajo }) })
  }

  onAgregar = () => {
    dtoAlumno.legajo = this.state.legajo;
    actualizarBody();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders
    }).then(res => res)
      .then(data => alert('El alumno ha sido creado exitosamente.'))
      .catch(err => console.log(err))
      
  }

  render() {
    return (
      <Grid container direction="row">
        <Grid item xs={12}>
          <Persona item={dtoPersona} />
          <Alumno legajo={this.state.legajo} item={dtoAlumno} />
        </Grid>
        <Grid item xs={10} align="right">
          <Button variant="contained" margin="normal" color="primary" onClick={this.onAgregar}>Aceptar</Button>
        </Grid>
      </Grid>
    );
  }
}

export default AlumnoC;