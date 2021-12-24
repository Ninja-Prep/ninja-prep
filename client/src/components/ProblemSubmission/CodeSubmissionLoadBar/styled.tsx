import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const BlinkText = styled.span`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT};
  animation: blinker 5s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  ${CoreUI.SIMPLE_BORDER_BOTTOM};
`;

export const BlinkContainer = styled.div`
  padding: 10px 0px 10px 10px;
`;
