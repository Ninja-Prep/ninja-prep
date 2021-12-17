import styled, {css} from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const OPEN_SANS = 'Open Sans';

export const ROBOTO_BOLD_FONT_LARGE = css`
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 79px;
  font-size: 50px;
`;

export const ROBOTO_BOLD_FONT = css`
  font-family: Roboto;
  letter-spacing: 0.25px;
  line-height: 45px;
  font-size: 34px;
  font-weight: bold;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
`;

export const HeadingFont = styled.p`
  ${ROBOTO_BOLD_FONT}
  padding: ${CoreUI.MEDIUM_SPACING} 0;
  text-align: center;
`;

export const ROBOTO_BOLD_FONT_LIGHT = css`
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 23px;
  font-size: 17px;
  font-weight: bold;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
`;

export const OPEN_SANS_REGULAR = css`
  font-family: ${OPEN_SANS};
  letter-spacing: 0.5px;
  line-height: 27px;
  font-size: 20px;
`;

export const OPEN_SANS_MEDIUM = css`
  font-family: ${OPEN_SANS};
  letter-spacing: 1.25px;
  line-height: 27px;
  font-size: 20px;
  font-weight: 600;
`;
