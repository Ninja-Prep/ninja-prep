import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import * as CoreUI from 'uiLibrary/CoreUI';
import LockIcon from '@mui/icons-material/Lock';

export const LARGE_BUTTON = css`
  border-radius: 24px;
  padding: 12px 24px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  transition-duration: 0.4s;
`;

export const MEDIUM_BUTTON = css`
  border-radius: 24px;
  padding: 6px 12px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  transition-duration: 0.4s;
`;

export const GET_FULL_ACCESS_CSS = css`
  margin: auto 48px auto 0px;
  letter-spacing: 0.15;
  line-spacing: 23;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  display: inline-flex;
  align-items: center;
  background-color: ${CoreUI.PREMIUM_COLOR};
  color: white;
  margin-left: 5px;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: white;
    background-color: ${CoreUI.DARK_PREMIUM_COLOR};
  }
`;

const GetFullAccessLarge = styled(Link)`
  ${LARGE_BUTTON}
  ${CoreUI.OPEN_SANS_MEDIUM}
  ${GET_FULL_ACCESS_CSS}
`;
const GetFullAccessMedium = styled(Link)`
  ${MEDIUM_BUTTON}
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  ${GET_FULL_ACCESS_CSS}
`;

export const PremiumLockIcon = styled(LockIcon)`
  margin-right: 5px;
`;

export const LightBlueButtonCSS = css`
  ${CoreUI.OPEN_SANS_MEDIUM}
  ${LARGE_BUTTON}
  background-color: ${CoreUI.LIGHT_BLUE};
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

export const SOCIAL_MEDIA_BUTTON = css`
  ${CoreUI.OPEN_SANS_MEDIUM}
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

interface FullAccessButtonProps {
  sizing?: 'medium' | 'large';
}

export function GetFullAccessButton(props: FullAccessButtonProps): JSX.Element {
  if (props?.sizing === 'medium') {
    return (
      <GetFullAccessMedium to="/premium">
        <PremiumLockIcon />
        <div>Get Full Access</div>
      </GetFullAccessMedium>
    );
  } else {
    return (
      <GetFullAccessLarge to="/premium">
        <PremiumLockIcon />
        <div>Get Full Access</div>
      </GetFullAccessLarge>
    );
  }
}
