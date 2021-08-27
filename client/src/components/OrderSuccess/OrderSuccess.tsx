/*
404 Not Found pages when user goes to route that does not exist
*/
import React from 'react';
import {Button} from 'react-bootstrap';
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
  ExploreProblemsIcon,
  ButtonContainer,
} from './styled';
import {Link} from 'react-router-dom';
import {YOU_NOW_HAVE, PREMIUM, CONFIRMATION_RECEIPT_WILL_BE_SENT, PREMIUM_EXPIRATION_DATE, PREMIUM_ACCOUNT_LOGIN, EXPLORE_PROBLEMS, THANK_YOU_FOR_CHOOSING_NINJAPREP} from 'utils/stringIds.json';

interface Props {
  email: string;
  expirationDate: string;
  provider: string;
}

function OrderSuccess(props: Props): JSX.Element {
  return (
    <OrderContainer>
      <CircleCheckIcon />
      <BoldThankYouHeader>{YOU_NOW_HAVE}</BoldThankYouHeader>
      <GoldBoldThankYouHeader> {PREMIUM} </GoldBoldThankYouHeader> <BoldThankYouHeader>{THANK_YOU_FOR_CHOOSING_NINJAPREP}</BoldThankYouHeader>
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
        <Link to="/challenges">
          <Button variant="outline-primary" size="lg">
            {EXPLORE_PROBLEMS}
            <ExploreProblemsIcon />
          </Button>
        </Link>
      </ButtonContainer>
    </OrderContainer>
  );
}

export default OrderSuccess;
