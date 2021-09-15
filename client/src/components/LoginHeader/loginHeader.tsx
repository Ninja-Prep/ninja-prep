import React from 'react';
import {LoginHeaderBodyText, LoginHeaderContainer, LoginHeaderLargeText} from './styled';

function LoginHeader(): JSX.Element {
  return (
    <LoginHeaderContainer>
      <LoginHeaderLargeText>Beat tech interviews with a strong foundation in coding</LoginHeaderLargeText>
      <LoginHeaderBodyText>NinjaPrep is the platform to offer everything you need to go from beginner to mastery withou memorizing or grinding problems</LoginHeaderBodyText>
    </LoginHeaderContainer>
  );
}

export default LoginHeader;
