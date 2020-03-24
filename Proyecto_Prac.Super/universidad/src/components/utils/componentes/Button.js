import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Button extends Component {
  render() {
    return (
      <div>
        <Button variant={this.props.variant||"contained"} 
                color={this.props.color||"primary"} 
                children={this.props.value}>
        </Button>
        
      </div>
    );
  }
}

export default Button;