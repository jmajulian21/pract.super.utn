import React, { Component } from 'react';
import Login from './login';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

class LoginC extends Component{
    render(){
        return(
            <Login/>
        )
    }
}

export default LoginC;