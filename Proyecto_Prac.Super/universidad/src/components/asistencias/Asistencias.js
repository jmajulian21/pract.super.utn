import React, { Component } from 'react';
import { Grid, Paper, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/css/styles'

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

class Asistencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCarrera : 0,
      idCurso : 0,
      idMateria: 0
    }
  }
  
  handleChange = (e, prop) => {
    let valor = e.target.value;
    if (prop === 'especialidad') {
      if(valor === 0 ){
        this.setState({idCarrera:valor,idCurso:null,idMateria:null});
      }else{
        this.setState({idCarrera:valor});
      }
      this.props.onCursos(valor);
    }
    if (prop === 'materia') {
      this.setState({idCurso:valor});
      this.props.onMaterias(this.state.idCarrera,valor);
    }
    if (prop === 'fechas') {
      this.setState({idMateria:valor});
      this.props.onMateria(this.state.idCarrera,this.state.idCurso,valor);
    }
  }

  _exporter;
  export = () => {
    this._exporter.save();
  }
  render() {
    const { classes, especialidades, cursos, materias, fechas,alumnos } = this.props;
    return (
      <div>
        <Grid container direction="column" className={classes.container}>
          <Grid item xs={11}>
            <Paper className={classes.button}>
              <Grid item xs>
                <h3>Filtos de Buesqueda</h3>
                <TextField variant='outlined' select label="Carrera" className={classes.textFieldAnchorMas} SelectProps={{ native: true }} onChange={e => this.handleChange(e, "especialidad")}>
                  <option value={0} />
                    {especialidades.map(option => (
                    <option key={option.id_carrera} value={option.id_carrera}>
                      {option.carrera}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Curso" className={classes.textFieldAnchorMinus} SelectProps={{ native: true }} onChange={e => this.handleChange(e, "materia")}>
                <option value={0} />
                  {cursos.map(option => (
                    <option key={option.id_curso} value={option.id_curso}>
                      {option.descripcion}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Materia" className={classes.textFieldAnchorMas} SelectProps={{ native: true }} onChange={e => this.handleChange(e, "fechas")}>
                <option value={0} />
                  {materias.map(option => (
                    <option key={option.id_materia} value={option.id_materia}>
                      {option.materia}
                    </option>
                  ))}
                </TextField>
                <TextField variant='outlined' select label="Fecha" className={classes.textField} SelectProps={{ native: true }} >
                <option value={0} />
                  {fechas.map(option => (
                    <option key={option.key} value={option.fecha}>
                      { 
                        convertDate(option.fecha)
                      }
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Paper>
          </Grid>
        </Grid>



        <Grid container direction="column">
          <Grid item xs={11}>
            <Paper style={{ border: '1px solid black', 'borderRadius': '5px' }}>
              <Grid item xs>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Legajo</TableCell>
                      <TableCell>Apellido</TableCell>
                      <TableCell>Nombres</TableCell>
                      <TableCell>Asistencia</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {alumnos.map(row => (
                      <TableRow key={row.detalle.id_alumno}>
                        <TableCell > {row.detalle.legajo}</TableCell>
                        <TableCell >{row.apellido}</TableCell>
                        <TableCell >{row.nombre}</TableCell>
                        <TableCell ><Checkbox /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Paper>
            <Grid item xs={12} align="right">
              <Button variant="contained" className={classes.button}>Aceptar</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Asistencias);