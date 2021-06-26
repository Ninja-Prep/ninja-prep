import React, {Component} from 'react';

import CodeSubmissionButtons from 'components/ProblemSubmission/CodeSubmissionButtons/CodeSubmissionButtons';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getLanguage} from 'redux/editorSettings/reducer';
import {RootState} from 'redux/rootReducer';
import {setSubmissionOutput} from 'redux/userSubmission/action';
import {submitProblem} from 'services/challenges/challengesService';
import {MatchProps} from 'utils/types/routing';

const mapStateToProps = (state: RootState) => {
  return {
    textValue: state.textEditor.value,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {setSubmissionOutput});

type Props = ConnectedProps<typeof connector> & MatchProps;

class CodeSubmissionButtonsContainer extends Component<Props> {
  async handleSubmit(event: {preventDefault: () => void}): Promise<void> {
    event.preventDefault();
    const submissionOutput = await submitProblem(
      this.props.textValue,
      this.props.language,
      this.props.match.params.id,
    );
    setSubmissionOutput(submissionOutput);
  }

  render(): JSX.Element {
    return <CodeSubmissionButtons submitHandler={this.handleSubmit} />;
  }
}

export default withRouter(connector(CodeSubmissionButtonsContainer));
