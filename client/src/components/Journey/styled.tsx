import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

export const JourneyCardLeftColumn = styled(Col).attrs(() => ({
  className: 'pr-5',
}))``;

export const JourneyCardRightColumn = styled(Col).attrs(() => ({
  className: 'my-auto pl-5',
}))``;

export const JourneyCardBackground = styled(Row).attrs(() => ({
  className: 'my-5 py-5 blob-bg',
}))``;

export const JourneyCardImage = styled.img.attrs(() => ({
  className: 'float-right img-fluid',
}))``;

export const JourneyCardStepNumber = styled.h2.attrs(() => ({
  className: 'step-number m-0',
}))``;

export const JourneyCardTitle = styled.h1.attrs(() => ({
  className: 'font-weight-bold my-3',
}))``;

export const JourneyCardDescription = styled.h2.attrs(() => ({
  className: 'w-80 font-weight-light text-secondary m-0',
}))``;

export const JourneyContainer = styled(Container).attrs(() => ({
  className: 'py-5',
}))``;

export const JourneyHeadingContainer = styled.div.attrs(() => ({
  className: 'text-center pb-4',
}))``;

export const JourneyHeading = styled.h1.attrs(() => ({
  className: 'font-weight-bold pb-2 display-4',
}))``;

export const JourneySubtitle = styled.h2.attrs(() => ({
  className: 'font-weight-light',
}))``;
