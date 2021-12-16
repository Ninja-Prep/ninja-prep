import CodeEditorResetCode from 'components/ProblemSubmission/CodeEditorResetCode/CodeEditorResetCode';
import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getLanguage} from 'reducers/editorSettings/reducer';
import {RootState} from 'reducers/rootReducer';
import {updateEditorText} from 'reducers/textEditor/actions';
import {getCookieUserCodeKey} from 'reducers/textEditor/reducer';
import {getStarterCode} from 'services/challenges';

const mapStateToProps = (state: RootState) => {
  return {
    cookieUserCodeKey: getCookieUserCodeKey(state),
    problemDetails: state.problemDetails.details,
    language: getLanguage(state),
  };
};

const connector = connect(mapStateToProps, {updateEditorText});

interface MatchParams {
  id: string;
}

type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class CodeEditorResetCodeContainer extends Component<Props> {
  async resetCode() {
    const starterCode = await getStarterCode(this.props.match.params.id, this.props.language);
    this.props.updateEditorText(starterCode);
    localStorage.setItem(this.props.cookieUserCodeKey, starterCode);
  }
  render(): JSX.Element {
    return <CodeEditorResetCode onClick={() => this.resetCode()} />;
  }
}

export default withRouter(connector(CodeEditorResetCodeContainer));
