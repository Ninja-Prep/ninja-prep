import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const QuestionTitle = styled.div`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  text-decoration: none;
  text-decoration: none;
  padding: 32px 0 16px 0;
  :hover {
    text-decoration: none;
    ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  }
`;

export const FreeTag = styled.span`
  color: #e40101;
  margin-right: 16px;
`;
