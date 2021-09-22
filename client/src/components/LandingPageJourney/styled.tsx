import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const SectionSpacing = styled.div`
  margin: ${CoreUI.EXTRA_LARGE_SPACING} 0;
`;

export const HeadingFont = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  margin: ${CoreUI.EXTRA_LARGE_SPACING} 0;
  text-align: center;
`;
export const SubHeadingFont = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${CoreUI.EXTRA_LARGE_SPACING};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ImgSizing = styled.div`
  flex: 1;
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

export const TextSizing = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const Img = styled.img`
  width: 383px;
`;

export const BodyFont = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  color: ${CoreUI.BODY_TEXT_COLOR};
`;
