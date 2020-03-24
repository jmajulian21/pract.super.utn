import React, { Component } from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/css/styles';

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

    login(user, pass, e) {
        fetch('http://localhost:8081/login', {
            method: 'POST',
            body: JSON.stringify({ usuario: user, contraseña: pass }),
            headers: myHeaders
        })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ isAuth: true, userData: data, tipo_usuario: data });
            })
    }


render() {
    const { classes } = this.props;
    return (
        <Grid container direction="row">
            <Paper >
                <TextField className={classes.textField} id="user" label="legajo" value={this.state.user} onChange={this.setUser} type="text" />
                <TextField className={classes.textField} id="pass" label="Contraseña" value={this.state.pass} onChange={this.setPass} type="password" />
                <Button variant="contained" className={classes.textField} onClick={e => this.login(this.state.user, this.state.pass, e)} color="primary" >Ingresar</Button>
            </Paper>
        </Grid>
    )}
setUser(e) { this.setState({ user: e.target.value }) }
setPass(e) { this.setState({ pass: e.target.value }) }
}


export default withStyles(styles)(Login);