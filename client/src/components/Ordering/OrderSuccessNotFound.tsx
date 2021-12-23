import * as React from 'react';

import {BoldThankYouHeader, OrderContainer, TextSizing, SubcontentPadding, ButtonContainer, ErrorIcon, ThankYouHeader} from './styled';
import {ORDER_NOT_FOUND, MISSING_ORDER_TEXT, EXPLORE_PROBLEMS} from 'utils/stringIds.json';
import {LightBlueLinkButton} from 'uiLibrary/Buttons';

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
          <LightBlueLinkButton to="/challenges" text={EXPLORE_PROBLEMS} />
        </ButtonContainer>
      </SubcontentPadding>
    </OrderContainer>
  );
}

export default OrderSuccessNotFound;
