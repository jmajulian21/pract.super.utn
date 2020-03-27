import React, { Component } from 'react';
import Admin from './menuSingle/Admin';
import Profesor from './menuSingle/Profesor';
import Secretaria from './menuSingle/Secretaria';
import { Grid, Toolbar, AppBar, Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";

class Menu extends Component {

      ir = to => {
        this.props.history.push(to);
      }

      logout = () => {
        localStorage.clear();
        this.ir("/")
      }
    
    render() {
        var idTipoPersona = localStorage.getItem('idTipoPersona');
        var estaLogeado = localStorage.getItem('estaLogeado');
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                        { idTipoPersona == 1 &&   
                            <Admin/>
                        }
                        { idTipoPersona == 2 &&   
                            <Profesor/>
                        }
                        { idTipoPersona == 3 &&   
                            <Secretaria/>
                        }
                        </Grid>
                    </Grid>
                    { estaLogeado &&
                        <Button color="secondary" variant="contained"   onClick={this.logout}><h4>Logout</h4></Button>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}
export default withRouter (Menu);