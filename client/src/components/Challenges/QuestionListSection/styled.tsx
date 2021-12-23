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
  ${CoreUI.THICK_SIMPLE_BORDER};
  border-radius: 12px;
  box-shadow: 0 5px 50px rgba(36, 209, 243, 20%);
`;
