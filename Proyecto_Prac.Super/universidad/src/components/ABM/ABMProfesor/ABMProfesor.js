import React, { Component } from 'react';
import Persona from '../../persona/personaC';
import Profesor from '../../profesor/profesorC';
import { Grid, Button } from '@material-ui/core';
import {dtoProfesor} from '../../../model/dto/Profesor';
import {dtoPersona} from '../../../model/dto/Persona';

class altaProfesor extends Component {
  render() {
    return (
      <Grid container direction="row">
          <Grid item xs={12}>
            <Persona item={dtoPersona}/>
            <Profesor item={dtoProfesor}/>
          </Grid>
          <Grid item xs={10} align="right">
            <Button variant="contained" margin="normal" color="primary" >Aceptar</Button>
          </Grid>
        </Grid>
    );
  }
}

export default altaProfesor;