import React from 'react';

import CodeSubmissionButtons from 'containers/CodeSubmissionButtons/CodeSubmissionButtons';
import CodeSubmissionVerdictContainer from 'containers/CodeSubmissionVerdict/CodeSubmissionVerdict';
import {Tab} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import TestCaseContent from '../TestCaseContent/TestCaseContent';
import {ContentProps} from '../TestCaseContent/TestCaseContent';
import TestCaseLabels, {LabelProps} from '../TestCaseLabels/TestCaseLabels';
import {
  FloatRightButtons,
  HeaderContainer,
  NavPills,
  RowHeightContainer,
  TabContentBackground,
  ZeroXPaddingCol,
} from './styled';

type OutputProps = LabelProps & ContentProps;

function TestCaseOutput(props: OutputProps): JSX.Element {
  return (
    <div>
      <HeaderContainer>
        <CodeSubmissionVerdictContainer />
        <FloatRightButtons>
          <CodeSubmissionButtons />
        </FloatRightButtons>
      </HeaderContainer>
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
    </div>
  );
}

export default TestCaseOutput;
