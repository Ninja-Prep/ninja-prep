import styled from 'styled-components';

export const CenteredText = styled.div`
  text-align: center;
`;

export const HeaderTitle = styled.h1.attrs(() => ({
  className: 'display-4 font-weight-bold pb-2 pt-0 mt-0',
}))``;

export const HeaderDescription = styled.p.attrs(() => ({
  className: 'text-secondary lead',
}))``;
