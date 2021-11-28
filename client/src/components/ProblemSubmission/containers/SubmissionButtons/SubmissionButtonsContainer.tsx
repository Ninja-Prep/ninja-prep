import React, {Component} from 'react';

import SubmissionButtons from '../../Submission/SubmissionButtons/SubmissionButtons';
import {connect, ConnectedProps} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getLanguage} from 'reducers/editorSettings/reducer';
import {RootState} from 'reducers/rootReducer';
import {submitProblem} from 'reducers/userSubmission/action';
import {MatchProps} from 'utils/types/routing';

const mapStateToProps = (state: RootState) => {
  return {
    textValue: state.textEditor.value,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {submitProblem});

type Props = ConnectedProps<typeof connector> & MatchProps;

class SubmissionButtonsContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event: {preventDefault: () => void}): Promise<void> {
    event.preventDefault();
    this.props.submitProblem(this.props.match.params.id);
  }

  render(): JSX.Element {
    return <SubmissionButtons submitHandler={this.handleSubmit} />;
  }
}

export default withRouter(connector(SubmissionButtonsContainer));
