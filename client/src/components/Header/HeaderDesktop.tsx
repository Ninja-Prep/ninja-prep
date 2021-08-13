import React from 'react';
import SocialMediaButtons from 'utils/SocialMediaButtons';
import {HEADER_TITLE, HEADER_DESCRIPTION, GET_STARTED} from 'utils/stringIds.json';

import {
  HeaderBackground,
  HeaderLeftContainer,
  MottoContainer,
  HeaderTitle,
  HeaderRightColumn,
  FormContainer,
  FormTitle,
} from './styled';

function HeaderDesktop(): JSX.Element {
  return (
    <HeaderBackground>
      <HeaderLeftContainer>
        <MottoContainer>
          <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
          <h2>
            {HEADER_DESCRIPTION}
          </h2>
        </MottoContainer>
        <HeaderRightColumn>
          <FormContainer>
            <FormTitle>{GET_STARTED}</FormTitle>
            <SocialMediaButtons cssClass="mx-auto fluid ui mb-4 py-3" />
          </FormContainer>
        </HeaderRightColumn>
      </HeaderLeftContainer>
    </HeaderBackground>
  );
}

export default HeaderDesktop;
