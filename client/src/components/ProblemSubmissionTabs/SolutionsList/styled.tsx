import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const SolutionsContainer = styled.div`
  .MuiPaper-elevation2 {
    box-shadow: none;
  }

  button: focus {
    outline: 1px auto;
  }
`;

export const Capitalize = styled.span`
  text-transform: capitalize;
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
`;
