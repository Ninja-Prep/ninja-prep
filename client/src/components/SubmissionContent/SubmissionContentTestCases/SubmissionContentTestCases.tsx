import React from 'react';

import {Tab} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import TestCaseContent from 'containers/TestCaseContent/TestCaseContent';
import TestCaseLabels from  'containers/TestCaseLabels/TestCaseLabels';
import {
  RowHeightContainer,
  ZeroXPaddingCol,
  NavPills,
  TabContentBackground,
} from './styled';

function SubmissionContentTestCases(): JSX.Element {
  return (
    <Tab.Container defaultActiveKey="0">
      <FadeIn>
        <RowHeightContainer>
          <ZeroXPaddingCol sm={3}>
            <NavPills variant="pills">
              <TestCaseLabels />
            </NavPills>
          </ZeroXPaddingCol>
          <ZeroXPaddingCol sm={9}>
            <TabContentBackground>
              <TestCaseContent />
            </TabContentBackground>
          </ZeroXPaddingCol>
        </RowHeightContainer>
      </FadeIn>
    </Tab.Container>
  );
}

export default SubmissionContentTestCases;
