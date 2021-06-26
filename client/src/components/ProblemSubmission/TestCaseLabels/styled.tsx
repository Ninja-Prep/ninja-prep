import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';

export const AcceptedIcon = styled(CheckRoundedIcon)`
  color: green;
`;

export const WrongAnswerIcon = styled(CloseRoundedIcon)`
  color: red;
`;

export const TestCaseTabLabel = styled(Nav.Link)`
  color: black;
  text-align: center;
`;
