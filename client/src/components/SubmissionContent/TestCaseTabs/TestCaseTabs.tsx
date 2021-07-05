import React from 'react';

import {Tab} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import TestCaseContent, {
  ContentProps,
} from '../TestCaseContent/TestCaseContent';
import TestCaseLabels, {LabelProps} from '../TestCaseLabels/TestCaseLabels';
import {
  RowHeightContainer,
  ZeroXPaddingCol,
  NavPills,
  TabContentBackground,
} from './styled';

export type OutputProps = LabelProps & ContentProps;

function TestCaseTabs(props: OutputProps): JSX.Element {
  return (
    <Tab.Container defaultActiveKey="0">
      <FadeIn>
        <RowHeightContainer>
          <ZeroXPaddingCol sm={3}>
            <NavPills variant="pills">
              <TestCaseLabels {...props} />
            </NavPills>
          </ZeroXPaddingCol>
          <ZeroXPaddingCol sm={9}>
            <TabContentBackground>
              <TestCaseContent {...props} />
            </TabContentBackground>
          </ZeroXPaddingCol>
        </RowHeightContainer>
      </FadeIn>
    </Tab.Container>
  );
}

export default TestCaseTabs;
