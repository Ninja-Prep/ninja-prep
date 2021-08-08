import React, {Component} from 'react';

import LanguageDropdown from 'components/ProblemSubmission/CodeEditor/UserSettings/LanguageDropdown';
import {connect, ConnectedProps} from 'react-redux';
import {changeMode} from 'redux/editorSettings/actions';
import {getLanguage} from 'redux/editorSettings/reducer';
import {RootState} from 'redux/rootReducer';
import {updateEditorText} from 'redux/textEditor/actions';
import {modeOptions} from 'utils/CodeEditorLanguages';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProblemStarterCode} from 'services/challenges/challengesService';
import {getCookieUsercodeKey} from 'redux/textEditor/reducer';

interface MatchParams {
  id: string;
}

const mapStateToProps = (state: RootState) => ({
  cookieUsercodeKey: getCookieUsercodeKey(state),
  language: getLanguage(state),
  mode: state.editorSettings.mode,
});

const connector = connect(mapStateToProps, {changeMode, updateEditorText});

type Props = ConnectedProps<typeof connector> &
  RouteComponentProps<MatchParams>;

class LanguageDropdownContainer extends Component<Props> {
  handleDropdownSelect(event: string | null) {
    this.props.changeMode(event);
  }

  async componentDidUpdate(prevProps: Props) {
    // When the user changes their language selection from the dropbox,
    // update the editor's text to either the user's saved code
    // from LocalStorage, or make a request for the starter code.
    if (this.props.mode !== prevProps.mode) {
      let value: string | null;
      value =
        localStorage.getItem(this.props.cookieUsercodeKey) ||
        (await getProblemStarterCode(
          this.props.match.params.id,
          this.props.language,
        )) || '';
      this.props.updateEditorText(value);
    }
  }

  render(): JSX.Element {
    return (
      <LanguageDropdown
        language={this.props.language}
        modeOptions={modeOptions}
        onSelect={(event: string | null) => this.handleDropdownSelect(event)}
      />
    );
  }
}

export default withRouter(connector(LanguageDropdownContainer));
