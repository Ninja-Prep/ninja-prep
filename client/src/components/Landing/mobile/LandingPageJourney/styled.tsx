import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const SectionSpacing = styled.div`
  margin: ${CoreUI.EXTRA_LARGE_SPACING} 0;
`;

export const HeadingFont = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  text-align: center;
`;
export const SubHeadingFont = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  text-align: center;
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${CoreUI.MEDIUM_SPACING};
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgSizing = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${CoreUI.MEDIUM_SPACING} 0;
`;

export const Img = styled.img`
  width: 100%;
`;

export const BodyFont = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  text-align: center;
  color: ${CoreUI.BODY_TEXT_COLOR};
`;

export const TextContainer = styled.div`
  max-width: 500px;
`;
