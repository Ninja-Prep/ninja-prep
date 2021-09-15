import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const NavLinkSpacing = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  margin: auto 48px auto 0px;
  letter-spacing: 0.15;
  line-spacing: 23;
  font-weight: bold;
  border-bottom: 3px solid transparent;
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

export const NavLinkMobile = styled.a`
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.5);
  padding: 10px 10px 10px 15px;

  :hover {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
`;

export default NavLink;
