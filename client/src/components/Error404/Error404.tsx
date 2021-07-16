/*
404 Not Found pages when user goes to route that does not exist
*/
import React from 'react';

import {
  TEXT_404,
  MISSING_PAGE_TEXT,
  OOPS,
  REDIRECT_TEXT,
} from 'utils/stringIds.json';

import {
  ErrorContainer,
  ErrorHeading,
  HomeButton,
  HomeLink,
  TextDiv,
} from './styled';

function Error404(): JSX.Element {
  return (
    <ErrorContainer>
      <ErrorHeading> {TEXT_404} </ErrorHeading>
      <TextDiv> {OOPS} </TextDiv>
      <TextDiv> {MISSING_PAGE_TEXT} </TextDiv>
      <TextDiv>
        <HomeButton>
          <HomeLink to="/">{REDIRECT_TEXT}</HomeLink>
        </HomeButton>
      </TextDiv>
    </ErrorContainer>
  );
}

export default Error404;
