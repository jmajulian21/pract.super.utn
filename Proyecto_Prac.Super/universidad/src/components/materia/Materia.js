import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core';
import { styles } from '../utils/css/styles';
import { rows } from '../../datos/datos';


class Materia extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" spacing={0}>
          <Grid item xs={9}>
            <h3>Datos Materia</h3>
            <TextField disabled className={classes.textField} id="standard-uncontrolled" label="Legajo" value="12345" />
            <TextField id="standard-uncontrolled" className={classes.textField} label="Materia" />
            <TextField id="standard-uncontrolled" className={classes.textField} label="Asignatura" />
            <TextField id="standard-uncontrolled" className={classes.textField} label="Curso" />
          </Grid>
          <Grid item xs={9}>
            <h3>Datos Profesor</h3>
            <TextField disabled className={classes.textField} id="standard-uncontrolled" label="Legajo" value="12345" />
            <TextField className={classes.textField} id="standard-uncontrolled" label="Apellido" />
            <TextField className={classes.textField} id="standard-uncontrolled" label="Nombre" />
          </Grid>
        </Grid>
        <Grid container direction="column">
        <h3>Alumnos Inscriptos</h3>
                <Grid item xs>
                  <Grid item xs>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Legajo</TableCell>
                          <TableCell>Apellido</TableCell>
                          <TableCell>Nombre</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.id}>
                            <TableCell > {row.legajo}</TableCell>
                            <TableCell >{row.apellido}</TableCell>
                            <TableCell >{row.nombre}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Materia);