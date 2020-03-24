import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';
import {styles} from '../utils/css/styles'
import { withStyles } from '@material-ui/core/styles';

class Alumno extends Component {

  handleChange = (e, prop) => {
    let valor = e.target.value;
    this.props.item[prop] = valor;
  }

  render() {
    const { classes } = this.props;
    return (
        <Grid container direction="column">
          <Grid item xs={10}>
          <Paper>
            <Grid item xs={10}>
              <h3>Datos Alumno</h3>
              <TextField disabled className={classes.textField} margin="normal" id="standard-uncontrolled" value={this.props.legajo} label="Legajo" onChange={e => this.handleChange(e,"legajo")}/>
              <TextField className={classes.textField} margin="normal" id="standard-uncontrolled" value={this.props.item.egresadoDe} label="Egresado De" onChange={e => this.handleChange(e,"egresadoDe")}/>
              <TextField className={classes.textField} margin="normal" id="standard-uncontrolled" value={this.props.item.titulo} label="Titulo" onChange={e => this.handleChange(e,"titulo")}/>
              <TextField className={classes.textField} margin="normal" id="standard-uncontrolled" value={this.props.item.promedio} label="Promedio Obtenido" onChange={e => this.handleChange(e,"promedio")}/>
            </Grid> 
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Alumno);