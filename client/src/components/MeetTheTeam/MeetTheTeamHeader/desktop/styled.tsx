import styled from 'styled-components';

export const HeaderContainer = styled.div.attrs(() => ({
  className: 'py-5',
}))`
  text-align: center;
`;

export const Description = styled.p.attrs(() => ({
  className: 'text-secondary lead',
}))`
  margin: auto;
  display: block;
`;

export const HeaderTitle = styled.h1.attrs(() => ({
  className: 'display-5 font-weight-bold pb-2',
}))``;
