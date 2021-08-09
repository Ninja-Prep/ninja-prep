import styled from 'styled-components';
import {Container, Button} from 'react-bootstrap';

export const CTABackground = styled.div.attrs(() => ({
  className: 'text-center',
}))`
  background: url('/images/Circles Background.svg') no-repeat, #259af3;
  background-position: -100px;
  background-repeat: no-repeat;
  width: 100%;
  height: 50%;
`;

export const CTAContainer = styled(Container).attrs(() => ({
  className: 'py-5',
}))``;

export const CTATitle = styled.h1.attrs(() => ({
  className: 'font-weight-bold pb-2 display-4 text-light',
}))``;

export const CTAButton = styled(Button).attrs(() => ({
  className: 'py-3 px-4',
  variant: 'outline-primary',
}))`
  background-color: white;
`;
