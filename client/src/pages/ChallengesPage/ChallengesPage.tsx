import React from 'react';

import QuestionList from 'containers/QuestionList/QuestionList';
import {CHALLENGES_NAVIGATION} from 'utils/stringIds.json';

import {ListContainer} from './styled';

function ChallengesPage(): JSX.Element {
  return (
    <ListContainer>
      <h1>{CHALLENGES_NAVIGATION}</h1>
      <QuestionList />
    </ListContainer>
  );
}

export default ChallengesPage;
