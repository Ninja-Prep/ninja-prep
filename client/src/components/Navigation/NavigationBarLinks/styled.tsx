import styled, {css} from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

const NavLinkCSS = css`
  text-decoration: none;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  margin: auto 48px auto 0px;
  letter-spacing: 0.15;
  line-spacing: 23;
  font-weight: bold;
  border-bottom: 3px solid transparent;
`;

export const PremiumLink = styled.div`
  ${NavLinkCSS}
`;

export const NavLink = styled.a`
  ${NavLinkCSS}
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

export default NavLink;
