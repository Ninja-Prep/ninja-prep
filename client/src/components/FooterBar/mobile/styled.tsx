import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const FooterLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
  }
`;

export const FooterNavbar = styled(Navbar)`
  border-top: 1px solid #dee2e6 !important;
  padding: 10px 0px;
`;
