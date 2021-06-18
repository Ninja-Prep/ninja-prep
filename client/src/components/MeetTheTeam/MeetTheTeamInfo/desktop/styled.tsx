import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Col).attrs(() => ({
  className: 'pb-3 w-75',
}))`
  margin: 0 auto;
`;

export const StyledRow = styled(Row)`
  margin: 75px 0;
`;

export const VerticalCenteredCol = styled(Col)`
  margin: auto 0;
`;

export const Name = styled.h1.attrs(() => ({
  className: 'display-4 pb-3 font-weight-bold',
}))``;

export const Description = styled.h1.attrs(() => ({
  className: 'lead text-secondary',
}))`
  font-size: 1.5rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.2rem;
  }
`;
