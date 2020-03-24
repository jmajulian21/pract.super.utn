import React, { Component } from 'react';
import { Grid, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import { materiasUNO, materiasDOS, materiasTRES, materiaCUATRO } from '../../../datos/datos';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../../utils/css/styles'

const especialidad = [{ value: 'P', label: 'Tec. Sup. en Programacion' },
{ value: 'A', label: 'Tec. Sup. en Sistemas' }];

class Consulta extends Component {

  ir = to => {
    this.props.history.push(to);
}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column">
          <Grid item xs={10}>
            <Paper>
              <Grid item xs={10}>
                <h3>Filtos de Buesqueda</h3>
                <TextField  select className={classes.textFieldAnchor} margin="normal" label="Carrera" variant='outlined' SelectProps={{ native: true }}>
                  {especialidad.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <Button variant='outlined' margin="normal" className={classes.button}>Buscar</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>


        <Grid container direction="row">
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasUNO.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell >
                            <IconButton href="/consulta/materias/materia" >
                              <SearchIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasDOS.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiasTRES.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs>
                <Grid item xs>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Legajo</TableCell>
                        <TableCell>Materia</TableCell>
                        <TableCell>Detalle</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {materiaCUATRO.map(row => (
                        <TableRow key={row.value}>
                          <TableCell > {row.value}</TableCell>
                          <TableCell >{row.label}</TableCell>
                          <TableCell ><SearchIcon /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Consulta);