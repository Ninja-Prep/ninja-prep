import React from 'react';

import CodeEditorNavbar from 'components/ProblemSubmission/CodeEditorNavbar/CodeEditorNavbar';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';

import {CodeEditorReflex, SubmissionContentReflex, SubmissionWrapper} from './styled';

import 'react-reflex/styles.css';
import LockedPremiumProblemSubmission from 'components/ProblemSubmission/LockedPremiumProblemSubmission/LockedPremiumProblemSubmission';

interface Props {
  title: string;
}

function ProtectedProblemSubmissionPage(props: Props) {
  return (
    <SubmissionWrapper>
      <CodeEditorNavbar title={props.title} />
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement>
              <LockedPremiumProblemSubmission />
            </ReflexElement>
            <ReflexSplitter style={{width: '10px'}} />
            <ReflexElement>
              <ReflexContainer orientation="horizontal">
                <CodeEditorReflex flex={4}></CodeEditorReflex>
                <ReflexSplitter className="testcaseSplitter" />
                <SubmissionContentReflex flex={2}></SubmissionContentReflex>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </SubmissionWrapper>
  );
}

export default ProtectedProblemSubmissionPage;
