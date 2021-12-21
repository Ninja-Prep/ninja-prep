import React from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {ProblemDetails} from 'utils/types/challenges/index';
import {ProblemDifficulty} from 'utils/enums/userSubmission';

import HintComponent from '../Hint/HintComponent';
import * as Styled from './styled';

interface Props {
  problemDetails: ProblemDetails;
}

function Difficulty(difficulty: ProblemDifficulty): JSX.Element {
  switch (difficulty) {
    case ProblemDifficulty.EASY:
      return <Styled.Easy>{difficulty}</Styled.Easy>;
    case ProblemDifficulty.MEDIUM:
      return <Styled.Medium>{difficulty}</Styled.Medium>;
    case ProblemDifficulty.HARD:
      return <Styled.Hard>{difficulty}</Styled.Hard>;
  }
}

function ProblemDescription({problemDetails}: Props): JSX.Element {
  return (
    <Styled.Container>
      <div>{Difficulty(problemDetails.difficulty)}</div>
      <div>
        <h3>
          <b>{problemDetails?.title}</b>
        </h3>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{problemDetails?.description || ''}</ReactMarkdown>
      </div>
      <HintComponent hints={problemDetails?.hints} />
    </Styled.Container>
  );
}

export default ProblemDescription;
