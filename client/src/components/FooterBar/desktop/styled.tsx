import {Nav, Row} from 'react-bootstrap';
import styled from 'styled-components';

export const FooterLogo = styled.div.attrs(() => ({
  className: 'col',
}))`
  text-align: center;
`;

export const CenterWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const FooterContainer = styled(Row)`
  border-top: 1px solid #dee2e6 !important;
  padding: 30px 0px;
`;

export const FooterSubheading = styled.p`
  font-weight: 700 !important;
  color: #6c757d !important;
`;

export const FooterNavLink = styled(Nav.Link)`
  display: block;
  color: black;
  padding: 0.5rem 0rem;

  &:hover {
    color: grey;
  }
`;
