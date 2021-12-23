import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  padding: 0 ${CoreUI.PAGE_PADDING};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  color: white;
  a {
    ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
    color: white;
  }
  span {
    ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
    color: white;
  }
`;

export const FooterContainer = styled.div`
  padding: 44px 0;
  background-color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
