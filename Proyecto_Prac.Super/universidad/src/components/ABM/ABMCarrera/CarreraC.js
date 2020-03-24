import React, { Component } from 'react';
import Carrera from './Carrera';


class CarreraC extends Component {
    constructor(props){
        super(props);
        this.state = {
            carrera:[]
        }
        this.agregarDato = this.agregarDato.bind(this);
    }
    
    agregarDato(carrera, fechaAlta) {
        this.db.push().set({ carrera:carrera ,fechaAlta:fechaAlta});
      }

    render() {
        return (
           <Carrera onAdd={this.agregarDato}/>
        )
    }
}

export default CarreraC;

