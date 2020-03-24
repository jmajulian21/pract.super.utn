import React, { Component } from 'react';
import {TextField } from '@material-ui/core';

class SelectedItem extends Component {
  render() {
    return (
        <TextField select
        disabled={this.props.disabled}
        tyle={{ marginLeft: 10 ,marginRight: 10}} 
        id={this.props.id||"outlined-select-currency-native"} 
        label={this.props.label}  
        value={this.props.value} 
        SelectProps={this.props.SelectProps||{native: true}}>{
            this.props.children
        }</TextField>
    );
  }
}

export default SelectedItem;