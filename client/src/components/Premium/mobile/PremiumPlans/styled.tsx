import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  margin: 24px 0;
`;

export const OurPlansHeader = styled.h1`
  text-align: center !important;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${CoreUI.EXTRA_LARGE_SPACING};
  min-height: 400px;
`;

export const Card = styled.div``;
