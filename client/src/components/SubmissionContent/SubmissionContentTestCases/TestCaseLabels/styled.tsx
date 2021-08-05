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

export const CenterTestCaseTabLabel = styled(Nav.Link)`
  color: black !important;
  text-align: center;
  &.active {
    background-color: #fff !important;
    border-radius: 0;
    box-shadow: 0 0.2px;
    font-weight: 700;
  }
`;
