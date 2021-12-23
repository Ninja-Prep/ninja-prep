import React from 'react';

import {
  OauthProviderSizing,
  EmailSizing,
  SubscriptionExpirationSizing,
  BoldThankYouHeader,
  OrderContainer,
  CircleCheckIcon,
  GoldBoldThankYouHeader,
  BoldSubheading,
  TextSizing,
  SubcontentPadding,
  ButtonContainer,
  Container,
  ThankYouHeader,
} from './styled';
import {YOU_NOW_HAVE, EXPLORE_PROBLEMS, PREMIUM, CONFIRMATION_RECEIPT_WILL_BE_SENT, PREMIUM_EXPIRATION_DATE, PREMIUM_ACCOUNT_LOGIN, THANK_YOU_FOR_CHOOSING_NINJAPREP} from 'utils/stringIds.json';
import {LightBlueLinkButton} from 'uiLibrary/Buttons';

interface Props {
  email: string;
  expirationDate: string;
  provider: string;
}

function OrderSuccess(props: Props): JSX.Element {
  return (
    <Container>
      <OrderContainer>
        <ThankYouHeader>
          <CircleCheckIcon />
          <BoldThankYouHeader>
            {YOU_NOW_HAVE} <GoldBoldThankYouHeader> {PREMIUM} </GoldBoldThankYouHeader> {THANK_YOU_FOR_CHOOSING_NINJAPREP}
          </BoldThankYouHeader>
        </ThankYouHeader>
        <SubcontentPadding>
          <TextSizing>{CONFIRMATION_RECEIPT_WILL_BE_SENT}</TextSizing>
          <BoldSubheading>
            <b>{PREMIUM_EXPIRATION_DATE}</b>
          </BoldSubheading>
          <SubscriptionExpirationSizing>{props.expirationDate}</SubscriptionExpirationSizing>
          <BoldSubheading>
            <b>{PREMIUM_ACCOUNT_LOGIN}</b>
          </BoldSubheading>
          <OauthProviderSizing>{props.provider}</OauthProviderSizing>
          <EmailSizing>{props.email}</EmailSizing>
        </SubcontentPadding>
        <ButtonContainer>
          <LightBlueLinkButton to="/challenges" text={EXPLORE_PROBLEMS} />
        </ButtonContainer>
      </OrderContainer>
    </Container>
  );
}

export default OrderSuccess;
