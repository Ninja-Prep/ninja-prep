import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: #f8fcff;
  margin-left: calc(-50vw + 50%);
`;

export const WhyNinjaPrepContainer = styled.div`
  ${CoreUI.STANDARDIZED_PAGE_PADDING}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubHeading = styled.p`
  text-align: center;
  margin: 0;
  padding: ${CoreUI.EXTRA_LARGE_SPACING} 0;
  ${CoreUI.ROBOTO_BOLD_FONT}
`;

export const SubText = styled.p`
  text-align: center;
  padding-bottom: ${CoreUI.EXTRA_LARGE_SPACING};
  ${CoreUI.ROBOTO_BOLD_FONT_LARGE}
  color: #1DA4BF;
  margin: 0;
`;

export const StartCodingButton = styled.button`
  margin-bottom: ${CoreUI.EXTRA_LARGE_SPACING};
  ${CoreUI.LightBlueButtonCSS}
`;
