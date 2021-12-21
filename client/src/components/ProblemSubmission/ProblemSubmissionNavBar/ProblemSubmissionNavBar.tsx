import React from 'react';

import * as Styled from './styled';
import {User} from 'utils/types/user';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import NavigationBarContentContainer from 'components/Navigation/containers/NavigationBarContent/NavigationBarContentContainer';
import {Link} from 'react-router-dom';

interface Props {
  title?: string;
  authUser: User;
  isPremiumUser: boolean;
}

function ProblemSubmissionNavBar(props: Props) {
  return (
    <Styled.Container>
      <Styled.LogoLink>
        <Link to="/">
          <DarkNinjaPrepLogo height={35} width={150} />
        </Link>
      </Styled.LogoLink>
      <Styled.Title>
        <span>{props.title}</span>
      </Styled.Title>
      <Styled.NavLinks>
        <NavigationBarContentContainer />
      </Styled.NavLinks>
    </Styled.Container>
  );
}

export default ProblemSubmissionNavBar;
