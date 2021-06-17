import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'pb-3 w-50',
}))`
  margin: 0 auto;
`;

export const StyledRow = styled(Row).attrs(() => ({
  className: 'h-75',
}))``;

export const VerticalCenteredCol = styled(Col)`
  margin: auto 0;
`;

export const Name = styled.h1.attrs(() => ({
  className: 'display-5 pb-3 font-weight-bold',
}))``;

export const Description = styled.h1.attrs(() => ({
  className: 'lead text-secondary',
}))``;
