import {Container} from 'react-bootstrap';
import styled from 'styled-components';

export const Biography = styled.p.attrs(() => ({
  className: 'lead my-5 text-secondary',
}))``;

export const Name = styled.h1.attrs(() => ({
  className: 'display-5  text-center',
}))``;

export const BiographyContainer = styled(Container).attrs(() => ({
  className: 'py-3 w-75',
}))``;
