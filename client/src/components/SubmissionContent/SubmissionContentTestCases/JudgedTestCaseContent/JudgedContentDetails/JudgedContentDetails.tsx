import React from 'react';

import {JudgedTestCase} from 'utils/types/challenges/index';

import ContentDetailBlock from '../../TestCaseContent/ContentDetailBlock/ContentDetailBlock';
import {ContentSpacing} from './styled';

interface Props {
  judgedTestCase: JudgedTestCase;
}

function JudgedContentDetails({judgedTestCase}: Props): JSX.Element {
  return (
    <div>
      <ContentSpacing>
        <ContentDetailBlock
          blockHeader="Your Output"
          blockContent={judgedTestCase?.userOutput}
        />
      </ContentSpacing>
      <ContentSpacing>
        <ContentDetailBlock
          blockHeader="Expected Output"
          blockContent={judgedTestCase?.expectedOutput}
        />
      </ContentSpacing>
    </div>
  );
}

export default JudgedContentDetails;
