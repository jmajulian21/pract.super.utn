import React, { Component } from 'react';
import { Grid,Button} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Admin extends Component {
    
    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return (
            <Grid item>
                 <Button color="inherit"  onClick={() => this.ir("/alumnos/gestion")}>Alumno</Button>
                 <Button color="inherit" onClick={() => this.ir("/profesores/gestion")}>Profesor</Button>
                 <Button color="inherit" onClick={() => this.ir("/materias/asignacion")}>Asignacion Materia</Button>
            </Grid>
        )
    }
}
export default withRouter(Admin);