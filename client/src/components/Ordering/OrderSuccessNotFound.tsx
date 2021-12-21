import * as React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

import {BoldThankYouHeader, OrderContainer, TextSizing, SubcontentPadding, ButtonContainer, ErrorIcon, ThankYouHeader} from './styled';
import {ORDER_NOT_FOUND, MISSING_ORDER_TEXT} from 'utils/stringIds.json';
import {ChallengesPageLinkButton} from 'uiLibrary/Buttons';

function OrderSuccessNotFound(): JSX.Element {
  return (
    <OrderContainer>
      <ThankYouHeader>
        <ErrorIcon />
        <BoldThankYouHeader>{ORDER_NOT_FOUND}</BoldThankYouHeader>
      </ThankYouHeader>
      <SubcontentPadding>
        <TextSizing>{MISSING_ORDER_TEXT}</TextSizing>
      </SubcontentPadding>
      <SubcontentPadding>
        <ButtonContainer>
          <ChallengesPageLinkButton />
        </ButtonContainer>
      </SubcontentPadding>
    </OrderContainer>
  );
}

export default OrderSuccessNotFound;
