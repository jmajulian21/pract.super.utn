import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import History from '../../home/history/History';
import ABMAlumno from '../../ABM/ABMAlumno/ABMAlumno';
import ABMProfesor from '../../ABM/ABMProfesor/ABMProfesor';
import ABMNotas from '../../ABM/ABMNotas/ABMNotas';
import Login from '../../login/loginC';
import Asistencias from '../../asistencias/AsistenciasC';
import ConsultaMateria from '../../consulta/materia/consultaC';
import Materia from '../../materia/MateriaC';
import Asignacion from '../../materia/asignacion/AasignacionC';
import Carrera from '../../ABM/ABMCarrera/CarreraC';
import MateriaAlta from '../../ABM/ABMMateria/MateriaC';

class Urls extends Component {
  render() {
    return (
            <Switch>
              <Route exact path='/history' component={History}/>
              <Route exact path='/alumnos/gestion' component={ABMAlumno}/>
              <Route exact path='/profesores/gestion' component={ABMProfesor}/>
              <Route exact path='/profesores/profesor/notas' component={ABMNotas}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/asistencias' component={Asistencias}/>
              <Route exact path='/consulta/materias' component={ConsultaMateria}/>
              <Route exact path='/consulta/materias/materia' component={Materia}/>
              <Route exact path='/materias/asignacion' component={Asignacion}/>
              <Route exact path='/carreras/gestion' component={Carrera}/>
              <Route exact path='/materias/gestion' component={MateriaAlta}/>
            </Switch>
    );
  }
}

export default Urls;


//
