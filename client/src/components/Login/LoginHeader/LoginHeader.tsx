import React from 'react';

import {LightBlueLinkButton} from 'uiLibrary/CoreUI';
import {GoogleIcon, FacebookIcon, GitHubIcon} from 'uiLibrary/SocialMediaIcons';
import * as Styled from './styled';
import {START_LEARNING_FOR_FREE, FREE_CODING_PROBLEM, CODING_FOUNDATION_HEADER, CODING_SUBHEADING_HEADER, GOOGLE_LOGIN, FACEBOOK_LOGIN, GITHUB_LOGIN} from 'utils/stringIds.json';

function LoginHeader(): JSX.Element {
  return (
    <Styled.LoginHeaderContainer>
      <Styled.FlexSizing>
        <Styled.LoginHeaderLargeText>{CODING_FOUNDATION_HEADER}</Styled.LoginHeaderLargeText>
        <Styled.LoginHeaderBodyText>{CODING_SUBHEADING_HEADER}</Styled.LoginHeaderBodyText>
        <LightBlueLinkButton to="/problem/Two-Sum" text={FREE_CODING_PROBLEM} icon={<Styled.RightChevron />} />
      </Styled.FlexSizing>
      <Styled.FlexSizing>
        <Styled.SocialMediaContainer>
          <Styled.StartLearningForFree>{START_LEARNING_FOR_FREE}</Styled.StartLearningForFree>
          <Styled.GoogleButton href="/api/auth/google">
            <GoogleIcon />
            {GOOGLE_LOGIN}
          </Styled.GoogleButton>
          <Styled.FacebookButton href="/api/auth/facebook">
            <FacebookIcon />
            {FACEBOOK_LOGIN}
          </Styled.FacebookButton>
          <Styled.GitHubButton href="/api/auth/github">
            <GitHubIcon />
            {GITHUB_LOGIN}
          </Styled.GitHubButton>
        </Styled.SocialMediaContainer>
      </Styled.FlexSizing>
    </Styled.LoginHeaderContainer>
  );
}

export default LoginHeader;
