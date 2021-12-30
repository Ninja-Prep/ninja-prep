import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import * as CoreUI from 'uiLibrary/CoreUI';
import LockIcon from '@mui/icons-material/Lock';
import {ReactElement} from 'react-markdown';

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
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  background-color: ${CoreUI.PREMIUM_COLOR};
  color: white;
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

export const PageButtonCSS = css`
  ${CoreUI.OPEN_SANS_MEDIUM}
  ${LARGE_BUTTON}
  border-style: none;
  color: #ffffff;
`;

export const LightBlueLink = styled(Link)`
  ${PageButtonCSS}
  background-color: ${CoreUI.LIGHT_BLUE};
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: White;
  :hover {
    cursor: pointer;
    color: White;
    background-color: #1da4bf;
  }
`;

export const LightBlueButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  ${PageButtonCSS}
  text-decoration: none;
  color: White;
  background-color: ${CoreUI.LIGHT_BLUE};
  :hover {
    cursor: pointer;
    color: White;
    background-color: #1da4bf;
  }
  :disabled {
    opacity: 0.5;
  }
`;

export const PremiumButton = styled.button`
  ${PageButtonCSS}
  text-decoration: none;
  color: White;
  :hover {
    cursor: pointer;
    color: White;
    background-color: ${CoreUI.DARK_PREMIUM_COLOR};
  }
  background-color: ${CoreUI.PREMIUM_COLOR};
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
        Get Full Access
      </GetFullAccessMedium>
    );
  } else {
    return (
      <GetFullAccessLarge to="/premium">
        <PremiumLockIcon />
        Get Full Access
      </GetFullAccessLarge>
    );
  }
}

interface BlueButtonProps {
  text: string;
  to: string;
  icon?: ReactElement;
}

export function LightBlueLinkButton(props: BlueButtonProps): JSX.Element {
  return (
    <LightBlueLink to={props.to}>
      {props.text}
      {props.icon}
    </LightBlueLink>
  );
}
