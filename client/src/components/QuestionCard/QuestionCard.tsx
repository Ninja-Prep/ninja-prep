import React from 'react';

import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom';

import {IconWrapper, CardRow, QuestionTitle} from './styled';

interface Props {
  questionTitle: string;
  path: string;
}

const QuestionCard = (props: Props): JSX.Element => {
  return (
    <CardRow>
      <IconWrapper xs={2}>
        <LockIcon />
      </IconWrapper>
      <QuestionTitle>
        <Link to={'/problem/' + props.path}>{props.questionTitle}</Link>
      </QuestionTitle>
    </CardRow>
  );
};

export default QuestionCard;
