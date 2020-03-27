import React, { Component } from 'react';
import { TextField, Button, Grid  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/css/styles';
import { withRouter } from "react-router-dom";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pass: ""
        }

        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
    }

    ir = to => {
        this.props.history.push(to);
    }

    login(user, pass, e) {
        fetch('http://localhost:8081/login', {
            method: 'POST',
            body: JSON.stringify({ usuario: user, contraseña: pass }),
            headers: myHeaders
        })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ isAuth: true, lastName: data[0]['APELLIDO'],name: data[0]['NOMBRE'], tipo_usuario: data[0]['TIPO_USUARIO'] })
                localStorage.setItem('idTipoPersona', this.state.tipo_usuario);
                localStorage.setItem('estaLogeado',this.state.isAuth);
                localStorage.setItem('lastNameUser',this.state.lastName);
                localStorage.setItem('NameUser',this.state.name);
                window.alert("Usuario Logeado Correctamente !!!\ Bienvenido "+this.state.lastName+" "+this.state.name);
                this.ir("/")
            }).catch(function(error) {
                window.alert("Nombre de usuario o contraseña son incorrecta");
            });
    }


render() {
    const { classes } = this.props; 
    var estaLogeado = localStorage.getItem('estaLogeado')?localStorage.getItem('estaLogeado'):false;
    var lastNameUser = localStorage.getItem('lastNameUser');
    var NameUser = localStorage.getItem('NameUser');
    return (
        
        <div>
            {!estaLogeado &&
            <div>
                <Grid container direction="row">
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <img src="./img/login.jpg" />
                    </Grid>
                    <Grid item xs={4}/>
                </Grid>   
                <Grid container direction="row"> 
                    <Grid item xs={5}/>
                    <Grid item xs={7}>
                    <Grid container direction="column"> 
                        <TextField className={classes.textField} id="user" label="legajo" value={this.state.user} onChange={this.setUser} type="text" />
                        <TextField className={classes.textField} id="pass" label="Contraseña" value={this.state.pass} onChange={this.setPass} type="password" />
                        <Button variant="contained" className={classes.textField} onClick={e => this.login(this.state.user, this.state.pass, e)} color="primary" >Ingresar</Button>
                    </Grid>
                    </Grid>
                    </Grid>
            </div>
            }
        </div>
        
        
    )}
setUser(e) { this.setState({ user: e.target.value }) }
setPass(e) { this.setState({ pass: e.target.value }) }
}


export default withRouter((withStyles(styles)(Login)));