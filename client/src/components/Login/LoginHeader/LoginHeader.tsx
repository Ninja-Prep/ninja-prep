import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {LoginHeaderBodyText, LoginHeaderContainer, LoginHeaderLargeText, StartLearningForFree, FlexSizing, SocialMediaContainer, GoogleButton, FacebookButton, GitHubButton} from './styled';
import {LightBlueButton} from 'uiLibrary/CoreUI';
import {GoogleIcon, FacebookIcon, GitHubIcon} from 'uiLibrary/SocialMediaIcons';
import {START_LEARNING_FOR_FREE, FREE_CODING_PROBLEM, CODING_FOUNDATION_HEADER, CODING_SUBHEADING_HEADER, GOOGLE_LOGIN, FACEBOOK_LOGIN, GITHUB_LOGIN} from 'utils/stringIds.json';
import {WhiteLink} from 'uiLibrary/Links';

function LoginHeader(): JSX.Element {
  return (
    <LoginHeaderContainer>
      <FlexSizing>
        <LoginHeaderLargeText>{CODING_FOUNDATION_HEADER}</LoginHeaderLargeText>
        <LoginHeaderBodyText>{CODING_SUBHEADING_HEADER}</LoginHeaderBodyText>
        <LightBlueButton>
          <WhiteLink to="/problem/Two-Sum">
            {FREE_CODING_PROBLEM}
            <ExpandMoreIcon />
          </WhiteLink>
        </LightBlueButton>
      </FlexSizing>
      <FlexSizing>
        <SocialMediaContainer>
          <StartLearningForFree>{START_LEARNING_FOR_FREE}</StartLearningForFree>
          <GoogleButton href="/api/auth/google">
            <GoogleIcon />
            {GOOGLE_LOGIN}
          </GoogleButton>
          <FacebookButton href="/api/auth/facebook">
            <FacebookIcon />
            {FACEBOOK_LOGIN}
          </FacebookButton>
          <GitHubButton href="/api/auth/github">
            <GitHubIcon />
            {GITHUB_LOGIN}
          </GitHubButton>
        </SocialMediaContainer>
      </FlexSizing>
    </LoginHeaderContainer>
  );
}

export default LoginHeader;
