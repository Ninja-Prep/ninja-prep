import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const PremiumHeaderContainer = styled.div`
  background-color: #f9fbfd;
  padding: 3rem 2rem;
  text-align: center !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${CoreUI.FULL_PAGE_WIDTH}
`;

export const PremiumHeaderText = styled.h3`
  padding: 0.5rem 0rem;
`;

export const PremiumSubdescription = styled.p`
  color: #6c757d !important;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const PremiumHeaderLogoWrapper = styled.div`
  justify-content: center;
  margin-bottom: 0;
`;
