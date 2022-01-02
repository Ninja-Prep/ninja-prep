import React from 'react';

import TabComponent from 'components/ProblemSubmissionTabs/Tabs/TabsComponent';
import CodeEditor from 'components/ProblemSubmission/containers/CodeEditor/CodeEditorContainer';
import ProblemSubmissionNavBarContainer from 'components/ProblemSubmission/containers/ProblemSubmissionNavBar/ProblemSubmissionNavBarContainer';
import SubmissionContent from 'components/ProblemSubmission/containers/SubmissionContent/SubmissionContentContainer';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';

import {GlobalStyle, CodeEditorSettings, InnerAreaWrapper, MiddleEditorWrapper, OuterEditorWrapper, SubmissionWrapper} from './styled';

import 'react-reflex/styles.css';
import {ProblemDetails} from 'utils/types/challenges';

interface Props {
  problemDetails: ProblemDetails;
  starterCode: string;
}

function ProblemSubmissionPage(props: Props): JSX.Element {
  return (
    <SubmissionWrapper>
      <GlobalStyle />
      <ProblemSubmissionNavBarContainer />
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement>
              <TabComponent problemDetails={props.problemDetails} />
            </ReflexElement>
            <ReflexSplitter style={{width: '10px'}} />
            <ReflexElement minSize={200}>
              <ReflexContainer orientation="horizontal">
                <ReflexElement flex={4}>
                  <OuterEditorWrapper>
                    <CodeEditorSettings />
                    <MiddleEditorWrapper>
                      <InnerAreaWrapper>
                        <CodeEditor starterCode={props.starterCode} />
                      </InnerAreaWrapper>
                    </MiddleEditorWrapper>
                  </OuterEditorWrapper>
                </ReflexElement>
                <ReflexSplitter className="testcaseSplitter" />
                <ReflexElement flex={2}>
                  <SubmissionContent />
                </ReflexElement>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </SubmissionWrapper>
  );
}

export default ProblemSubmissionPage;
