import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

export const HeaderBackground = styled.div.attrs(() => ({
  className: 'text-light px-5',
}))`
  background-image: url('/images/Header-Gradient-Background.svg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const HeaderLeftContainer = styled(Row).attrs(() => ({
  className: 'px-5 mx-5',
}))`
  position: relative;
  top: 5%;
`;

export const MottoContainer = styled(Col).attrs(() => ({
  className: 'px-5 mx-5',
}))``;

export const HeaderTitle = styled.h1.attrs(() => ({
  className: 'font-weight-bold pb-2 display-4',
}))``;

export const HeaderRightColumn = styled(Col).attrs(() => ({
  className: 'px-5 mx-5',
}))``;

export const FormContainer = styled.div.attrs(() => ({
  className: 'rounded pt-4 pb-2 px-5 mx-5',
}))`
  background-color: rgba(243, 247, 248, 0.3);
`;

export const FormTitle = styled.h1.attrs(() => ({
  className: 'font-weight-bold pb-3 mx-auto text-dark',
}))``;
