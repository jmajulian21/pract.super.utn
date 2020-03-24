import React, { Component } from 'react';
import { Grid, TextField,Button} from '@material-ui/core';

class Materia extends Component {
  constructor(props){
    super(props);
    this.state = {
        id: 0 ,
        legajo: null ,
        materia: null ,
        fechaAlta: null ,
    }
    this.onClickEnviar = this.onClickEnviar.bind(this);
}

handleChange = (e, prop) => {
    let valor = e.target.value;
    this.setState({ [prop]: valor });
}


onClickEnviar = ()  =>{
}

    render() {
        return (
            <Grid container direction="column" spacing={0}>
            <Grid item xs={9}>
              <h3>Datos Materia</h3>
              <TextField id="standard-uncontrolled" label="Legajo" value={this.state.legajo} onChange={e => this.handleChange(e,"legajo")}/>
              <TextField id="standard-uncontrolled" label="Materia" value={this.state.materia} onChange={e => this.handleChange(e,"materia")}/>
              <TextField variant='outlined' id="date" label="Fecha Alta" type="date" InputLabelProps={{shrink: true,}} value={this.state.fechaAlta} onChange={e => this.handleChange(e,"fechaAlta")}/>
              <Button variant="contained" onClick={this.onClickEnviar}>Cargar</Button>
            </Grid>
          </Grid>
        )
    }
}

export default Materia;

