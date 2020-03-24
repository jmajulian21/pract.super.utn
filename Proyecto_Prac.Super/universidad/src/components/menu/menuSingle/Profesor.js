import React, { Component } from 'react';
import { Grid,Button} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Profesor extends Component {

    ir = to => {
        this.props.history.push(to);
    }

    render() {
        return (
            <Grid item>
                <Button color="inherit" onClick={() => this.ir("/profesores/profesor/notas")}>Registrar Notas</Button>
            </Grid>
        )
    }
}
export default withRouter(Profesor);