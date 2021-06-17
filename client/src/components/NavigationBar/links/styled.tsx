import styled from 'styled-components';

const NavLink = styled.a.attrs(() => ({
  className: 'pl-3',
}))`
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.5);
  margin: auto;
`;

export default NavLink;
