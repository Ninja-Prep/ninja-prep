import React from 'react';

import TabComponent from 'components/ProblemSubmissionTabs/Tabs/TabsComponent';
import CodeEditor from 'components/ProblemSubmission/containers/CodeEditor/CodeEditorContainer';
import ProblemSubmissionNavBarContainer from 'components/ProblemSubmission/containers/ProblemSubmissionNavBar/ProblemSubmissionNavBarContainer';
import SubmissionContent from 'components/ProblemSubmission/containers/SubmissionContent/SubmissionContentContainer';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';

import {CodeEditorReflex, CodeEditorSettings, InnerAreaWrapper, MiddleEditorWrapper, OuterEditorWrapper, SubmissionContentReflex, SubmissionWrapper} from './styled';

import 'react-reflex/styles.css';
import {ProblemDetails} from 'utils/types/challenges';

interface Props {
  problemDetails: ProblemDetails;
  starterCode: string;
}

function ProblemSubmissionPage(props: Props): JSX.Element {
  return (
    <SubmissionWrapper>
      <ProblemSubmissionNavBarContainer />
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement>
              <TabComponent problemDetails={props.problemDetails} />
            </ReflexElement>
            <ReflexSplitter style={{width: '10px'}} />
            <ReflexElement>
              <ReflexContainer orientation="horizontal">
                <CodeEditorReflex flex={4}>
                  <OuterEditorWrapper>
                    <CodeEditorSettings />
                    <MiddleEditorWrapper>
                      <InnerAreaWrapper>
                        <CodeEditor starterCode={props.starterCode} />
                      </InnerAreaWrapper>
                    </MiddleEditorWrapper>
                  </OuterEditorWrapper>
                </CodeEditorReflex>
                <ReflexSplitter className="testcaseSplitter" />
                <SubmissionContentReflex flex={2}>
                  <SubmissionContent />
                </SubmissionContentReflex>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
    </SubmissionWrapper>
  );
}

export default ProblemSubmissionPage;
