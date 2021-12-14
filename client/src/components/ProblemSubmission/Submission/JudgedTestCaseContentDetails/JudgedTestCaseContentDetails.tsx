import React from 'react';

import {JudgedTestCase} from 'utils/types/challenges/index';

import ContentDetailBlock from '../ContentDetailBlock/ContentDetailBlock';
import {ContentSpacing} from './styled';

interface Props {
  judgedTestCase: JudgedTestCase;
}

function JudgedTestCaseContentDetails({judgedTestCase}: Props): JSX.Element {
  return (
    <div>
      <ContentSpacing>
        <ContentDetailBlock blockHeader="Your Output" blockContent={judgedTestCase.userOutput || judgedTestCase.stderr || 'No Output'} />
      </ContentSpacing>
      {judgedTestCase.expectedOutput && (
        <ContentSpacing>
          <ContentDetailBlock blockHeader="Expected Output" blockContent={judgedTestCase.expectedOutput} />
        </ContentSpacing>
      )}
    </div>
  );
}

export default JudgedTestCaseContentDetails;