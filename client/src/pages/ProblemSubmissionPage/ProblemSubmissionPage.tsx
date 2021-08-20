import React, {Component} from 'react';

import CodeEditorUserSettings from 'components/ProblemSubmission/CodeEditor/UserSettings/CodeEditorUserSettings';
import CodeEditorNavbar from 'components/ProblemSubmission/CodeEditorNavbar/CodeEditorNavbar';
import TabComponent from 'components/ProblemSubmission/Tabs/TabsComponent';
import CodeEditor from 'containers/CodeEditor/CodeEditor';
import SubmissionContent from 'containers/SubmissionContent/SubmissionContent';
import FadeIn from 'react-fade-in';
import {connect, ConnectedProps} from 'react-redux';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getLanguage} from 'redux/editorSettings/reducer';
import {loadProblemDetails} from 'redux/problemDetails/action';
import {RootState} from 'redux/rootReducer';
import AsyncSpinner from 'utils/AsyncSpinner';

import styles from './ProblemSubmission.module.css';
import {CodeEditorReflex, EditorSettingsWrapper, InnerAreaWrapper, MiddleEditorWrapper, OuterEditorWrapper, SubmissionContentReflex, SubmissionWrapper} from './styled';

import 'react-reflex/styles.css';

interface MatchParams {
  id: string;
}

const mapStateToProps = (state: RootState) => {
  return {
    problemDetails: state.problemDetails.details,
    isError: state.problemDetails.isError,
    isLoading: state.problemDetails.isLoading,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {loadProblemDetails});

type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class ProblemSubmissionPage extends Component<Props> {
  async componentDidMount(): Promise<void> {
    this.props.loadProblemDetails(this.props.match.params.id);
  }

  get getStarterCode() {
    return this.props.problemDetails?.starterCode || '';
  }

  render(): JSX.Element {
    if (this.props.isLoading) return <AsyncSpinner />;
    return (
      <FadeIn delay={500} transitionDuration={1500}>
        <SubmissionWrapper>
          <CodeEditorNavbar title={this.props.problemDetails?.title} />
          <ReflexContainer orientation="horizontal">
            <ReflexElement>
              <ReflexContainer orientation="vertical">
                <ReflexElement>
                  <TabComponent problemDetails={this.props.problemDetails} />
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
                            <CodeEditor starterCode={this.getStarterCode} problemTitle={this.props.match.params.id} />
                          </InnerAreaWrapper>
                        </MiddleEditorWrapper>
                      </OuterEditorWrapper>
                    </CodeEditorReflex>
                    <ReflexSplitter className={styles.testcaseSplitter} />
                    <SubmissionContentReflex flex={2}>
                      <SubmissionContent />
                    </SubmissionContentReflex>
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

export default withRouter(connector(ProblemSubmissionPage));
