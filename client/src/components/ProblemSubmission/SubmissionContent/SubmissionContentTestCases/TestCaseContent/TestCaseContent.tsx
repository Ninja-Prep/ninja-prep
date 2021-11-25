import React, {Fragment} from 'react';

import {Tab} from 'react-bootstrap';
import {INPUT_TEXT} from 'utils/stringIds.json';

import ContentDetailBlock from './ContentDetailBlock/ContentDetailBlock';

interface ContentProps {
  testCases: string[];
}

function TestCaseContent({
  testCases,
}: ContentProps): JSX.Element {
  return (
    <Fragment>
      {testCases.map((testCase, index) => {
        return (
          <Tab.Pane eventKey={index.toString()} key={testCase}>
            <ContentDetailBlock
              blockHeader={INPUT_TEXT}
              blockContent={testCase}
            />
          </Tab.Pane>
        );
      })}
    </Fragment>
  );
}

export default TestCaseContent;
