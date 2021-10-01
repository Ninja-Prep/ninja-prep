import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const CategoryTitle = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
`;

export const SectionContainer = styled.div`
  padding: 48px 0;
`;

export const QuestionCardContainer = styled.div`
  background-color: white;
  border-color: ${CoreUI.BORDER_COLOR};
  border-radius: 1px;
  box-shadow: 0 5px 50px rgba(36, 209, 243, 20%);
`;
