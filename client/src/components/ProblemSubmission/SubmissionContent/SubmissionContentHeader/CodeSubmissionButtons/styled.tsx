import {Button} from 'react-bootstrap';
import styled from 'styled-components';

export const SubmitCodeButtonColor = styled(Button)`
  color: white;
  background-color: #28a745;
  border-color: #28a745;

  &:hover {
    color: white;
    background-color: green;
    border-color: #28a745;
  }
`;
