import React from 'react';
import {Button} from 'react-bootstrap';
import {
  GetPremiumIcon,
  ContactFooter,
  UserSettingsIcon,
  SettingsHeader,
  SettingsContainer,
  TextSizing,
  BoldSubheading,
  SubcontentPadding,
  OauthProviderSizing,
  ButtonContainer,
  ContactEmailColor,
} from './styled';
import {Link} from 'react-router-dom';
import {EXPLORE_PROBLEMS, SETTINGS, ACCOUNT_LOGIN, PREMIUM_STATUS, CONTACT_FOOTER, NINJAPREP_EMAIL, PREMIUM_EXPIRATION_DATE} from 'utils/stringIds.json';

interface Props {
  premiumExpirationDate?: string;
  email: string;
  oauthProvider: string;
}

function UserSettings(props: Props): JSX.Element {
  const displayPremiumExpiration = (
    <>
      <BoldSubheading>{PREMIUM_EXPIRATION_DATE}</BoldSubheading>
      <TextSizing>{props.premiumExpirationDate}</TextSizing>
    </>
  );

  const displayGetPremium = (
    <>
      <BoldSubheading>{PREMIUM_STATUS}</BoldSubheading>
      <ButtonContainer>
        <Link to="/premium">
          <Button variant="outline-warning" size="lg">
            {EXPLORE_PROBLEMS}
            <GetPremiumIcon />
          </Button>
        </Link>
      </ButtonContainer>
    </>
  );

  return (
    <SettingsContainer>
      <UserSettingsIcon />
      <SettingsHeader>{SETTINGS}</SettingsHeader>
      <SubcontentPadding>
        {props.premiumExpirationDate ? displayPremiumExpiration : displayGetPremium}
        <BoldSubheading>{ACCOUNT_LOGIN}</BoldSubheading>
        <OauthProviderSizing>{props.oauthProvider}</OauthProviderSizing>
        <TextSizing>{props.email}</TextSizing>
      </SubcontentPadding>
      <ContactFooter>
        {CONTACT_FOOTER}
        <ContactEmailColor> {NINJAPREP_EMAIL}</ContactEmailColor>
      </ContactFooter>
    </SettingsContainer>
  );
}

export default UserSettings;
