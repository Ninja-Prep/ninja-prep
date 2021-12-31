import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';
export const ListContainer = styled.div`
  padding: 2.5rem 2.5rem 0rem 2.5rem;
`;

export const ProblemsHeader = styled.div`
  padding: ${CoreUI.EXTRA_LARGE_SPACING} 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderFont = styled.div`
  ${CoreUI.ROBOTO_BOLD_FONT_LARGE}
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
  margin-left: calc(-50vw + 50%);
`;

export const ContentContainer = styled.div`
  ${CoreUI.STANDARDIZED_MOBILE_PAGE_PADDING};
`;

export const PremiumButtonContainer = styled.div`
  display: inline-flex;
  padding-top: 22px;
`;
