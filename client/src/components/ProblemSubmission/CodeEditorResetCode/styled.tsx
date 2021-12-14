import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import {LIGHT_BLUE} from 'uiLibrary/CoreUI';

export const ResetCode = styled(Button)`
  color: white;
  background-color: ${LIGHT_BLUE};
  border-style: none;
  color: #ffffff;
  :focus {
    outline: none;
    background-color: ${LIGHT_BLUE};
  }
  :active {
    outline: none;
    background-color: ${LIGHT_BLUE};
    border-color: transparent;
  }
  :hover {
    background-color: #1da4bf;
  }
`;

export const ResetCodeContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Bold = styled.div`
  font-weight: bold;
  padding: 0 8px;
`;
