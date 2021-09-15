import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const LoginHeaderContainer = styled.div`
  padding: ${CoreUI.PAGE_PADDING} 0px;
  width: 50%;
`;

export const LoginHeaderLargeText = styled.span`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.5px;
  line-height: 79px;
`;

export const LoginHeaderBodyText = styled.p`
  font-family: ${CoreUI.OPEN_SANS};
  margin: 32px 0px;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 27px;
  color: ${CoreUI.BODY_TEXT_COLOR};
`;
