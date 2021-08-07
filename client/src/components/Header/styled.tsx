import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

export const HeaderContainer = styled(Container).attrs(() => ({
  className: 'p-0'
}))`
  position: relative;
  top: 15%;
`;

export const HeaderBackground = styled.div.attrs(() => ({
  className: 'text-light',
}))`
  background-image: url('/images/Header-Gradient-Background.svg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const HeaderFormBackground = styled.div.attrs(() => ({
  className: 'rounded',
}))`
  background-color: rgba(243, 247, 248, 0.3);
`;


export const HeaderMottoContainer = styled(Col).attrs(() => ({
  className: 'mr-5 pr-5 pl-0'
}))``;

export const HeaderTitle = styled.h1.attrs(() => ({
  className: 'font-weight-bold pb-2 display-4'
}))`
`;

export const HeaderFormContainer = styled(Col).attrs(() => ({
  className: 'ml-5 pl-5 pr-0'
}))``;