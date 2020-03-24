import React, { Component } from 'react';
import { Grid,Paper,TextField } from '@material-ui/core';
import {localidad,tipoDoc,sexo} from '../../datos/datos';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../utils/css/styles'

class Persona extends Component {

handleChange = (e, prop) => {
  let valor = e.target.value;
  this.props.item[prop] = valor;
}

  render() {
    const { classes } = this.props;
    return (
          <Grid container direction="column">
          <Grid item xs={10}>
          <Paper >
            <Grid item xs={10}>
              <h3>Datos Personales</h3>
              <TextField  className={classes.textField} margin="normal" label="Nombre" value={this.props.item.nombre} onChange={e => this.handleChange(e,"nombres")}/>
              <TextField  className={classes.textField} margin="normal" label="Apellido" value={this.props.item.apellido} onChange={e => this.handleChange(e,"apellido")} />
              <TextField  select className={classes.textField} margin="normal" label="Tipo Documento" value={this.props.item.tipoDoc} onChange={e => this.handleChange(e,"tipoDoc")} SelectProps={{native: true}}>
                  <option value={""}/>
                  {tipoDoc.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField className={classes.textField} margin="normal" type="number" label="Documento" value={this.props.item.nroDoc} onChange={e => this.handleChange(e,"nroDoc")}/>
              <TextField className={classes.textField} margin="normal" id="date" label="Fecha Nacimiento" type="date" value={this.props.item.fechNacimiento} onChange={e => this.handleChange(e,"fechNacimiento")} InputLabelProps={{shrink: true}}/>
              <TextField select className={classes.textField} margin="normal" label="Sexo" value={this.props.item.sexo} onChange={e => this.handleChange(e,"sexo")} SelectProps={{native: true}}>
                  <option value={""}/>
                  {sexo.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={10} >
              <TextField className={classes.textField} margin="normal" label="Direccion" value={this.props.item.direccion} onChange={e => this.handleChange(e,"direccion")} />
              <TextField className={classes.textField} margin="normal" label="piso" value={this.props.item.piso} onChange={e => this.handleChange(e,"piso")}/>
              <TextField className={classes.textField} margin="normal" type="number" label="Cod.Postal" value={this.props.item.codPostal} onChange={e => this.handleChange(e,"codPostal")}/>
              <TextField select className={classes.textField} margin="normal" label="Localidad" value={this.props.item.localidad} onChange={e => this.handleChange(e,"localidad")} SelectProps={{native: true}}>
                  <option value={""}/>
                  {localidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </TextField>
              <TextField className={classes.textField} margin="normal"  type="number" label="Nro.Telefono" onChange={e => this.handleChange(e,"telefono")}/>
              <TextField className={classes.textField} margin="normal"  type="number" label="Nro.Celular" onChange={e => this.handleChange(e,"celular")}/>
              <TextField className={classes.textField} margin="normal"  type="email" label="Email" onChange={e => this.handleChange(e,"email")}/>
            </Grid>  
           </Paper>
           </Grid>
          </Grid>
    );
  }
}

export default withStyles(styles)(Persona);