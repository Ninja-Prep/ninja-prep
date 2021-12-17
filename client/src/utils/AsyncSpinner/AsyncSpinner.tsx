import {CircularProgress} from '@mui/material';
import React, {Component} from 'react';
import * as Styled from './styled';

class AsyncSpinner extends Component {
  render(): JSX.Element {
    return (
      <Styled.Container style={{position: 'absolute', top: '25%', left: '50%'}}>
        <CircularProgress />
      </Styled.Container>
    );
  }
}

export default AsyncSpinner;
