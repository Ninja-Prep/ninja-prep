import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  ${CoreUI.STANDARDIZED_MOBILE_PAGE_PADDING};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${CoreUI.OPEN_SANS_REGULAR}
  color: white;
  a {
    ${CoreUI.OPEN_SANS_REGULAR}
    color: white;
    font-size: 12px;
  }
  span {
    ${CoreUI.OPEN_SANS_REGULAR}
    color: white;
    font-size: 12px;
  }
  font-size: 12px;
  #copyright {
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  padding: 8px 0;
  background-color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
