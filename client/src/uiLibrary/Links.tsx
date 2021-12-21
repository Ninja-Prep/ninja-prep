import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {DEFAULT_BLACK_TEXT_COLOR} from './Colors';

export const NavLinkCSS = css`
  text-decoration: none;
  color: ${DEFAULT_BLACK_TEXT_COLOR};
  margin: auto 48px auto 0px;
  letter-spacing: 0.15;
  line-spacing: 23;
  font-weight: bold;
  border-bottom: 3px solid transparent;
`;

export const WhiteLink = styled(Link)`
  text-decoration: none;
  color: White;
  :hover {
    cursor: pointer;
    color: White;
  }
`;
