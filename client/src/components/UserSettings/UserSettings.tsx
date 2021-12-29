import React from 'react';
import * as Styled from './styled';

import {SETTINGS, ACCOUNT_LOGIN, CONTACT_FOOTER, HELP_NINJAPREP_EMAIL, PREMIUM_EXPIRATION_DATE} from 'utils/stringIds.json';
import {Box} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import {GetFullAccessButton} from 'uiLibrary/CoreUI';

interface Props {
  premiumExpirationDate?: string;
  email: string;
  oauthProvider: string;
  isPremium: boolean;
}

function UserSettings(props: Props): JSX.Element {
  return (
    <Styled.PageContainer>
      <Styled.ContentBox p={3}>
        <Box p={3}>
          <Styled.SettingsHeader>
            <SettingsIcon fontSize="inherit" />
            {SETTINGS}
          </Styled.SettingsHeader>
        </Box>
        <Box p={3}>
          <Styled.Subtitle>{ACCOUNT_LOGIN}</Styled.Subtitle>
          <Styled.Content>{props.oauthProvider}</Styled.Content>
          <Styled.Content>{props.email}</Styled.Content>
        </Box>
        {props.isPremium ? (
          <Box p={3}>
            <Styled.Subtitle> {PREMIUM_EXPIRATION_DATE}</Styled.Subtitle>
            <Styled.Content> {props.premiumExpirationDate}</Styled.Content>
          </Box>
        ) : (
          <Box p={1}>
            <GetFullAccessButton sizing="medium" />
          </Box>
        )}

        <Box p={3}>
          <Styled.Footer>
            {CONTACT_FOOTER} <Styled.Email href="mailto:help@ninjaprep.io">{HELP_NINJAPREP_EMAIL}</Styled.Email>
          </Styled.Footer>
        </Box>
      </Styled.ContentBox>
    </Styled.PageContainer>
  );
}

export default UserSettings;
