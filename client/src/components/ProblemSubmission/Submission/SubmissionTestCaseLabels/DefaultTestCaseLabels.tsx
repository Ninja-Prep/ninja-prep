import React from 'react';

import DefaultTabLabel from './DefaultTabLabel';

interface Props {
  testCases: string[];
}

function DefaultTestCaseLabels({testCases}: Props): JSX.Element {
  return (
    <div>
      {testCases.map((_, index) => {
        const labelString = `Testcase ${index + 1}`;
        return <DefaultTabLabel key={_} labelText={labelString} index={index.toString()} />;
      })}
    </div>
  );
}

export default DefaultTestCaseLabels;
