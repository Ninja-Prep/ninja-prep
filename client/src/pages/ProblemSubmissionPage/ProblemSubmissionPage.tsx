import React, {Component} from 'react';

import CodeEditorNavbar from 'components/ProblemSubmission/CodeEditorNavbar/CodeEditorNavbar';
import TabComponent from 'components/ProblemSubmission/Tabs/TabsComponent';
import TestCaseArea from 'components/ProblemSubmission/TestCaseOutput/TestCaseArea';
import CodeEditorUserSettings from 'components/ProblemSubmission/UserSettings/CodeEditorUserSettings';
import CodeEditor from 'containers/CodeEditor/CodeEditor';
import FadeIn from 'react-fade-in';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProblemDetails} from 'services/challenges/challengesService';
import AsyncSpinner from 'utils/AsyncSpinner';
import {ProblemDetails} from 'utils/types/challenges';

import styles from './ProblemSubmission.module.css';
import {
  CodeEditorReflex,
  EditorSettingsWrapper,
  InnerAreaWrapper,
  MiddleEditorWrapper,
  OuterEditorWrapper,
  SubmissionWrapper,
  TestCaseReflex,
} from './styled';

import 'react-reflex/styles.css';

interface ProblemSubmissionState {
  isLoading: boolean;
}

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>;

class ProblemSubmissionPage extends Component<Props, ProblemSubmissionState> {
  problemDetails: ProblemDetails = null;

  state: ProblemSubmissionState = {
    isLoading: true,
  };

  async componentDidMount(): Promise<void> {
    this.problemDetails = await getProblemDetails(this.props.match.params.id);
    this.setState({isLoading: false});
  }
  /**
   *
   */
  render(): JSX.Element {
    if (this.state.isLoading) return <AsyncSpinner />;
    return (
      <FadeIn>
        <SubmissionWrapper>
          <CodeEditorNavbar title={this.problemDetails?.title} />
          <ReflexContainer orientation="horizontal">
            <ReflexElement>
              <ReflexContainer orientation="vertical">
                <ReflexElement>
                  <TabComponent problemDetails={this.problemDetails} />
                </ReflexElement>
                <ReflexSplitter style={{width: '10px'}} />
                <ReflexElement>
                  <ReflexContainer orientation="horizontal">
                    <CodeEditorReflex flex={4}>
                      <OuterEditorWrapper>
                        <EditorSettingsWrapper>
                          <CodeEditorUserSettings />
                        </EditorSettingsWrapper>

                        <MiddleEditorWrapper>
                          <InnerAreaWrapper>
                            <CodeEditor
                              problemTitle={this.problemDetails?.title}
                            />
                          </InnerAreaWrapper>
                        </MiddleEditorWrapper>
                      </OuterEditorWrapper>
                    </CodeEditorReflex>
                    <ReflexSplitter className={styles.testcaseSplitter} />
                    <TestCaseReflex flex={2}>
                      {/* <TestCaseArea
                        testCases={this.problemDetails.testCases}
                        mode={this.props.mode}
                        codeSnippet={this.state.value}
                      /> */}
                    </TestCaseReflex>
                  </ReflexContainer>
                </ReflexElement>
              </ReflexContainer>
            </ReflexElement>
          </ReflexContainer>
        </SubmissionWrapper>
      </FadeIn>
    );
  }
}

export default withRouter(ProblemSubmissionPage);
