import styled, {css} from 'styled-components';

export const PAGE_PADDING = '16%';
export const DEFAULT_BLACK_TEXT_COLOR = '#0F1111';
export const LIGHT_BLUE = '#24D1F3';
export const MEDIUM_BLUE = '#1DA4BF';
export const EXTRA_LARGE_SPACING = '88px';
export const MEDIUM_SPACING = '44px';
export const OPEN_SANS = 'Open Sans';
export const BODY_TEXT_COLOR = '#595959';
export const PREMIUM_COLOR = '#F28324';
export const DARK_PREMIUM_COLOR = '#DB6A00';
export const BORDER_COLOR = '#E4E3E4';

export const ROBOTO_BOLD_FONT_LARGE = css`
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 79px;
  font-size: 50px;
`;

export const STANDARD_BUTTON = css`
  border-radius: 24px;
  padding: 12px 24px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  transition-duration: 0.4s;
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

export const LightBlueButtonCSS = css`
  ${OPEN_SANS_MEDIUM}
  ${STANDARD_BUTTON}
  background-color: ${LIGHT_BLUE};
  border-style: none;
  color: #ffffff;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #1da4bf;
  }
`;

export const LightBlueButton = styled.button`
  ${LightBlueButtonCSS}
`;

export const ROBOTO_BOLD_FONT = css`
  font-family: Roboto;
  letter-spacing: 0.25px;
  line-height: 45px;
  font-size: 34px;
  font-weight: bold;
  color: ${DEFAULT_BLACK_TEXT_COLOR};
`;

export const ROBOTO_BOLD_FONT_LIGHT = css`
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 23px;
  font-size: 17px;
  font-weight: bold;
  color: ${DEFAULT_BLACK_TEXT_COLOR};
`;

export const SOCIAL_MEDIA_BUTTON = css`
  ${OPEN_SANS_MEDIUM}
  border-radius: 10px;
  padding: 16px 32px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  border-style: none;
  width: 340px;
  color: #ffffff;
  transition-duration: 0.4s;
  text-align: center;
  color: white;
  :hover {
    text-decoration: none;
    color: white;
  }
  :focus {
    outline: none;
  }
  > svg {
    float: left;
  }
`;

export const TRIMMED_ELLIPSES = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const STANDARDIZED_PAGE_PADDING = css`
  padding: 0 16%;
`;

export const FULL_PAGE_WIDTH = css`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
