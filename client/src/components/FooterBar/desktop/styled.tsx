import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const FooterLogo = styled.div`
  padding: 0 ${CoreUI.PAGE_PADDING};
`;

export const FooterContainer = styled.div`
  padding: 44px 0;
  background-color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
