import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';
import * as CoreUI from 'uiLibrary/CoreUI';

export const NavigationBarFullWidth = styled.div`
  width: 100%;
`;

export const FixedNavigationBar = styled(Navbar)`
  background-color: #ffffff;
  padding: 15px 16%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const PositionLogo = styled.div`
  text-decoration: none;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  border-bottom: 3px solid transparent;
  padding: 0;
  :hover {
    cursor: pointer;
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  }
  :after {
    display: block;
    content: '';
    border-bottom: 3px solid ${CoreUI.LIGHT_BLUE};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
`;

export const NavigationFloatRight = styled.div`
  float: right;
`;

export const NavigationDropdownPadding = styled.div`
  padding-top: 15px;
`;
