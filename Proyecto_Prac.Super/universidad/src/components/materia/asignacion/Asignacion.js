import React, { Component } from 'react';
import { Grid, Paper, TextField, Button, Table, TableHead, TableRow, FormGroup, TableCell, FormControlLabel, TableBody, Checkbox } from '@material-ui/core';
import { grado, especialidad,materia } from '../../../datos/datos';

class Asignacion extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Paper >
                            <Grid item xs>
                                <h3>Asignacion Materia</h3>
                                <TextField variant='outlined' style={{ marginLeft: 10, marginRight: 10 }} select id="outlined-select-currency-native" label="Carrera" SelectProps={{ native: true }}>
                                    {especialidad.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>

                                <TextField variant='outlined' style={{ marginLeft: 10, marginRight: 10 }} select id="outlined-select-currency-native" label="Materia" SelectProps={{ native: true }}>
                                    {materia.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>

                                <TextField variant='outlined' style={{ marginLeft: 10, marginRight: 10 }} select id="outlined-select-currency-native" label="Curso" SelectProps={{ native: true }}>
                                    {grado.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                
                                <TextField id="filled-name" variant="filled" label="Año" />
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Lunes"
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Martes"
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Miercoles"
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    
                                </FormGroup>
                                <FormGroup row>
                                <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Jueves"
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Viernes"
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedA" />
                                        }
                                        label="Sabado"
                                        
                                    />
                                    <TextField id="filled-name" variant="filled" label="Horario" />
                                    </FormGroup>
                                <Button variant="contained">Agregar</Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>



                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Paper style={{ border: '1px solid black', 'borderRadius': '5px' }}>
                            <Grid item xs={12}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Carrera</TableCell>
                                            <TableCell>Materia</TableCell>
                                            <TableCell>Lunes</TableCell>
                                            <TableCell>Martes</TableCell>
                                            <TableCell>Miercoles</TableCell>
                                            <TableCell>Jueves</TableCell>
                                            <TableCell>Viernes</TableCell>
                                            <TableCell>Sabado</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={1}>
                                            <TableCell > Tec. Sup. en Programacion</TableCell>
                                            <TableCell >Matematica</TableCell>
                                            <TableCell >18:30 - 22:30</TableCell>
                                            <TableCell ></TableCell>
                                            <TableCell > </TableCell>
                                            <TableCell >18:30 - 20:30</TableCell>
                                            <TableCell > </TableCell>
                                            <TableCell > </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                            </Grid>
                        </Paper>
                        <Button variant="contained">Aceptar</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Asignacion;