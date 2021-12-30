import styled from 'styled-components';

import * as CoreUI from 'uiLibrary/CoreUI';
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 32px;
  background-color: ${CoreUI.LIGHT_BLUE};
`;

export const DrawerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px 8px;
`;

export const DrawerIcon = styled(MenuIcon)`
  transform: scale(3);
  border-radius: 8px;
  color: white;
`;

export const NavLink = styled.a`
  decoration: none;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};

  :hover {
    cursor: pointer;
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
