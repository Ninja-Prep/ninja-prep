import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as CoreUI from 'uiLibrary/CoreUI';
import LockIcon from '@mui/icons-material/Lock';

const GetFullAccess = styled(Link)`
  ${CoreUI.STANDARD_BUTTON}
  ${CoreUI.OPEN_SANS_MEDIUM}
  display: flex;
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

export const PremiumLockIcon = styled(LockIcon)`
  margin-right: 5px;
`;

export function GetFullAccessButton(): JSX.Element {
  return (
    <GetFullAccess to="/premium">
      <PremiumLockIcon />
      <div>Get Full Access</div>
    </GetFullAccess>
  );
}
