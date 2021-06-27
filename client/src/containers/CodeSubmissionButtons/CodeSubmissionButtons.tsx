import React, {Component} from 'react';

import CodeSubmissionButtons from 'components/ProblemSubmission/SubmissionContentHeader/CodeSubmissionButtons/CodeSubmissionButtons';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getLanguage} from 'redux/editorSettings/reducer';
import {RootState} from 'redux/rootReducer';
import {submitProblem} from 'redux/userSubmission/action';
import {MatchProps} from 'utils/types/routing';

const mapStateToProps = (state: RootState) => {
  return {
    textValue: state.textEditor.value,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {submitProblem});

type Props = ConnectedProps<typeof connector> & MatchProps;

class CodeSubmissionButtonsContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: {preventDefault: () => void}): Promise<void> {
    event.preventDefault();
    submitProblem(this.props.match.params.id);
  }

  render(): JSX.Element {
    return <CodeSubmissionButtons submitHandler={this.handleSubmit} />;
  }
}

export default withRouter(connector(CodeSubmissionButtonsContainer));
