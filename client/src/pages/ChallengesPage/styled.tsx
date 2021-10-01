import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';
export const ListContainer = styled.div`
  padding: 2.5rem 2.5rem 0rem 2.5rem;
`;

export const ProblemsHeader = styled.div`
  padding: ${CoreUI.EXTRA_LARGE_SPACING} 0 0 0;
  display: flex;
  align-items: center;
`;

export const HeaderFont = styled.span`
  ${CoreUI.ROBOTO_BOLD_FONT_LARGE}
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: #f8fcff;
  margin-left: calc(-50vw + 50%);
`;

export const ContentContainer = styled.div`
  padding: 0 ${CoreUI.PAGE_PADDING} 40px ${CoreUI.PAGE_PADDING};
`;

export const PremiumButtonFlex = styled.div`
  margin-left: auto;
`;
