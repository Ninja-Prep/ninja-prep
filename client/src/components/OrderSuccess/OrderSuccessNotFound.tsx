/*
404 Not Found pages when user goes to route that does not exist
*/
import React from 'react';
import {Button} from 'react-bootstrap';
import {BoldThankYouHeader, OrderContainer, TextSizing, SubcontentPadding, ExploreProblemsIcon, ButtonContainer, ErrorIcon} from './styled';
import {Link} from 'react-router-dom';
import {ORDER_NOT_FOUND, MISSING_ORDER_TEXT, EXPLORE_PROBLEMS} from 'utils/stringIds.json';

function OrderSuccessNotFound(): JSX.Element {
  return (
    <OrderContainer>
      <ErrorIcon />
      <BoldThankYouHeader>{ORDER_NOT_FOUND}</BoldThankYouHeader>
      <SubcontentPadding>
        <TextSizing>{MISSING_ORDER_TEXT}</TextSizing>
      </SubcontentPadding>
      <SubcontentPadding>
        <ButtonContainer>
          <Link to="/challenges">
            <Button variant="outline-primary" size="lg">
              {EXPLORE_PROBLEMS}
              <ExploreProblemsIcon />
            </Button>
          </Link>
        </ButtonContainer>
      </SubcontentPadding>
    </OrderContainer>
  );
}

export default OrderSuccessNotFound;
