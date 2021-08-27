import React, {Component} from 'react';
import {Spinner} from 'react-bootstrap';

class AsyncSpinner extends Component {
  render(): JSX.Element {
    return (
      <div style={{position: 'absolute', top: '25%', left: '50%'}}>
        <Spinner animation="border" />
      </div>
    );
  }
}

export default AsyncSpinner;
