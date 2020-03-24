import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';
import {styles} from '../utils/css/styles'
import { withStyles } from '@material-ui/core/styles';

class Profesor extends Component {

  handleChange = (e, prop) => {
    let valor = e.target.value;
    this.props.item[prop] = valor;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
       <Grid container direction="column">
          <Grid item xs={10}>
          <Paper>
            <Grid item xs={10}>
              <h3>Datos Profesor</h3>
              <TextField disabled className={classes.textField} margin="normal" label="Legajo" value={this.props.item.Legajo} onChange={e => this.handleChange(e,"legajo")}/>
              <TextField className={classes.textField} margin="normal" label="Egresado De" value={this.props.item.egresadoDe} onChange={e => this.handleChange(e,"egresadoDe")}/>
              <TextField className={classes.textField} margin="normal" label="Titulo" value={this.props.item.titulo} onChange={e => this.handleChange(e,"titulo")}/>
            </Grid> 
           </Paper>
           </Grid>
          </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Profesor);