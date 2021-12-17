import React from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {ProblemDetails} from 'utils/types/challenges/index';

import HintComponent from '../Hint/HintComponent';
import * as Styled from './styled';

interface Props {
  problemDetails: ProblemDetails;
}

function ProblemDescription({problemDetails}: Props): JSX.Element {
  return (
    <Styled.Container>
      <div>
        <Styled.DifficultyColor>Easy</Styled.DifficultyColor>
      </div>
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
