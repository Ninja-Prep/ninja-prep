import React from 'react';

import {VerdictStatus} from 'utils/enums/userSubmission';
import {JudgedTestCase} from 'utils/types/challenges/index';

import AcceptedTabLabel from '../labels/AcceptedTabLabel';
import WrongAnswerTabLabel from '../labels/WrongAnswerTabLabel';

interface Props {
  judgedTestCases: JudgedTestCase[];
}

function JudgedTestCaseLabels({judgedTestCases}: Props): JSX.Element {
  return (
    <div>
      {judgedTestCases.map((_, index) => {
        const labelString = `Testcase ${index + 1}`;
        if (_.status === VerdictStatus.ACCEPTED)
          return (
            <AcceptedTabLabel
              labelText={labelString}
              index={index.toString()}
            />
          );
        else {
          return (
            <WrongAnswerTabLabel
              labelText={labelString}
              index={index.toString()}
            />
          );
        }
      })}
    </div>
  );
}

export default JudgedTestCaseLabels;
