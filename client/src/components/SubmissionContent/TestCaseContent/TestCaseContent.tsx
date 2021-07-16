import React, {Fragment} from 'react';

import {Tab} from 'react-bootstrap';
import {INPUT_TEXT} from 'utils/stringIds.json';
import {JudgedTestCase} from 'utils/types/challenges/index';

import ContentDetailBlock from './ContentDetailBlock/ContentDetailBlock';
import FormatHeader from './FormatHeader';
import JudgedContentDetails from './JudgedContentDetails/JudgedContentDetails';

export interface ContentProps {
  judgedTestCases?: JudgedTestCase[];
  testCases: string[];
}

function TestCaseContent({
  judgedTestCases,
  testCases,
}: ContentProps): JSX.Element {
  return (
    <Fragment>
      {testCases.map((testCase, index) => {
        return (
          <Tab.Pane eventKey={index.toString()} key={testCase}>
            {judgedTestCases && (
              <FormatHeader verdictStatus={judgedTestCases[index]?.status} />
            )}
            <ContentDetailBlock
              blockHeader={INPUT_TEXT}
              blockContent={testCase}
            />
            {judgedTestCases && (
              <JudgedContentDetails judgedTestCase={judgedTestCases[index]} />
            )}
          </Tab.Pane>
        );
      })}
    </Fragment>
  );
}

export default TestCaseContent;
