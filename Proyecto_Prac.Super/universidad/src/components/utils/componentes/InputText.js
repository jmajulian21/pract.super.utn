import React, { Component } from 'react';
import {TextField } from '@material-ui/core';

class InputText extends Component {
  render() {
    return (
        <TextField 
        disabled={this.props.disabled}
        tyle={{ marginLeft: 10 ,marginRight: 10}} 
        id={this.props.id||"standard-uncontrolled"} 
        label={this.props.label}  
        value={this.props.value}/>
    );
  }
}

export default InputText;