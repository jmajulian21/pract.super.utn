import React, { Component } from 'react';
import Admin from './menuSingle/Admin';
import Profesor from './menuSingle/Profesor';
import Secretaria from './menuSingle/Secretaria';
import { Grid, Toolbar, AppBar, Button } from '@material-ui/core';

class Menu extends Component {

      logout = () => {
        localStorage.setItem('estaLogeado', false);
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
                        <Button color="inherit"  onClick={this.logout}>Logout</Button>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}
export default Menu;