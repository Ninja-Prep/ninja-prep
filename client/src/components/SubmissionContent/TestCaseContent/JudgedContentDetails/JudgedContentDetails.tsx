import React from 'react';

import {JudgedTestCase} from 'utils/types/challenges/index';

import ContentDetailBlock from '../ContentDetailBlock/ContentDetailBlock';

interface Props {
  judgedTestCases: JudgedTestCase[];
}

function JudgedContentDetails({judgedTestCases}: Props): JSX.Element {
  return (
    <>
      {judgedTestCases.map((testCase, index) => {
        return (
          <div>
            <ContentDetailBlock
              blockHeader="Your Output"
              blockContent={testCase.userOutput}
            />
            <ContentDetailBlock
              blockHeader="Expected Output"
              blockContent={testCase.expectedOutput}
            />
          </div>
        );
      })}
    </>
  );
}

export default JudgedContentDetails;
