import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

import * as CoreUI from 'uiLibrary/CoreUI';

export const FixedNavigationBar = styled(AppBar)`
  padding: 15px 16%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.a`
  text-decoration: none;
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

export const NavigationDropdownPadding = styled.div`
  padding-top: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  flex-dirction: row;
`;
