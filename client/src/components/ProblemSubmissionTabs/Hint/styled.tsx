import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const HintTitle = styled.div`
  ${CoreUI.OPEN_SANS_MEDIUM}
  padding: 8px 0;
`;

export const StyledAccordion = styled.div`
  .MuiAccordion-root {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  }
  margin-bottom: 8px;
`;

export const HintText = styled.span`
  font-family: ${CoreUI.OPEN_SANS};
`;
