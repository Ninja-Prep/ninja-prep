import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

export const NavigationBarFullWidth = styled.div`
  width: 100%;
`;

export const FixedNavigationBar = styled(Navbar)`
  background-color: #2a2a3a;
  padding: 15px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const NavBarBrand = styled.div`
  width: 25%;
`;

export const PositionLogo = styled.div`
  text-align: center;
`;

export const NavigationFloatRight = styled.div`
  float: right;
  margin-right: 10%;
`;

export const NavigationDropdownPadding = styled.div`
  padding-top: 15px;
`;
