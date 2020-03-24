import React, { Component } from 'react';
import Materia from './Materia';

class MateriaC extends Component {
    constructor(props){
        super(props);
        this.state = {
            materia:[]
        }
    }

    render() {
        return (
            <Materia/>
        )
    }
}

export default MateriaC;