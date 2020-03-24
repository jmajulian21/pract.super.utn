import React, { Component } from 'react';
import { Grid,Button} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Secretaria extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return (
            <Grid item>
                <Button color="inherit" onClick={() => this.ir("/asistencias")}>Asistencias</Button>
                <Button color="inherit" onClick={() => this.ir("/consulta/materias")}>Consulta Materia</Button>
            </Grid>
        )
    }
}
export default withRouter(Secretaria);