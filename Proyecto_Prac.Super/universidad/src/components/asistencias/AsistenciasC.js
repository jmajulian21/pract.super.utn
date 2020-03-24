import React, { Component } from 'react';
import Asistencias from './Asistencias';

class AsistenciasC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidades: [],
      cursos: [],
      materias:[],
      fechas:[],
      alumnos:[]
    }
    this.getCursos = this.getCursos.bind(this);
    this.getMaterias = this.getMaterias.bind(this);
    this.getMateria = this.getMateria.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8081/carreras")
      .then(response => response.json())
      .then(data => { this.setState({ especialidades: data }); })
  }

  getCursos(idCurso) {
    if(idCurso === 0){
      this.setState({ cursos: [], materias:[],fechas:[],alumnos:[] });
    }else{
      fetch("http://localhost:8081/carreras/"+idCurso+"/cursos")
      .then(response => response.json())
      .then(data => { this.setState({ cursos: data , materias:[],fechas:[],alumnos:[]}); })
    }
  }

  getMaterias(idCarrera,idCurso) {
    if(idCarrera === 0 || idCurso === 0){
      this.setState({ materias:[],fechas:[],alumnos:[] });
    }else{
      fetch("http://localhost:8081/carreras/"+idCarrera+"/cursos/"+idCurso+"/materias")
      .then(response => response.json())
      .then(data => { this.setState({ materias: data ,fechas:[],alumnos:[] }); })
    }
  }

  getMateria(idCarrera,idCurso,idMateria) {
    fetch("http://localhost:8081/carreras/"+idCarrera+"/cursos/"+idCurso+"/materias/"+idMateria)
      .then(response => response.json())
      .then(data => { this.setState({ fechas: data.fechas , alumnos: data.alumnos }); })
  }


  render() {

    return (
      <Asistencias especialidades={this.state.especialidades} 
                   cursos={this.state.cursos} 
                   onCursos={this.getCursos}
                   materias={this.state.materias}
                   fechas={this.state.fechas}
                   alumnos={this.state.alumnos}
                   onMaterias={this.getMaterias}
                   onMateria={this.getMateria}/>
    );
  }
}

export default AsistenciasC;