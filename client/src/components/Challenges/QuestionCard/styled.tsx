import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const QuestionTitleLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const QuestionTitle = styled.div`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  text-decoration: none;
  :hover {
    text-decoration: none;
    ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  }
`;

export const QuestionBody = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  ${CoreUI.TRIMMED_ELLIPSES}
  color: ${CoreUI.BODY_TEXT_COLOR};
  padding: 0 0 32px 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  border-bottom: 1px solid ${CoreUI.BORDER_COLOR};
  :hover {
    border-radius: 1px;
    box-shadow: 0 5px 50px rgba(36, 209, 243, 20%);
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  width: 30px;
  padding-bottom: 50px;
  > svg {
    font-size: 30px;
  }
`;