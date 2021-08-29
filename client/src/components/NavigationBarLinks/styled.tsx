import styled from 'styled-components';

const NavLink = styled.a`
  text-decoration: none;
  padding-left: 15px;
  color: hsla(0, 0%, 100%, 0.5);
  margin: auto;
  :hover {
    text-decoration: none;
    cursor: pointer;
    color: white;
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
