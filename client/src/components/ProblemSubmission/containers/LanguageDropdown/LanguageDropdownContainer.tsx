import React, {Component} from 'react';

import {SelectChangeEvent} from '@mui/material';
import LanguageDropdown from 'components/ProblemSubmission/CodeEditorSettings/LanguageDropdown';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {changeMode} from 'reducers/editorSettings/actions';
import {getLanguage} from 'reducers/editorSettings/reducer';
import {RootState} from 'reducers/rootReducer';
import {updateEditorText} from 'reducers/textEditor/actions';
import {getCookieUserCodeKey} from 'reducers/textEditor/reducer';
import {getStarterCode} from 'services/challenges/challengesService';
import {codeMirrorModeOptions} from 'utils/CodeEditorLanguages';

interface MatchParams {
  id: string;
}

const mapStateToProps = (state: RootState) => ({
  cookieUserCodeKey: getCookieUserCodeKey(state),
  language: getLanguage(state),
  mode: state.editorSettings.mode,
});

const connector = connect(mapStateToProps, {changeMode, updateEditorText});

type Props = ConnectedProps<typeof connector> & RouteComponentProps<MatchParams>;

class LanguageDropdownContainer extends Component<Props> {
  handleDropdownSelect(event: string | null) {
    this.props.changeMode(event);
  }

  async componentDidUpdate(prevProps: Props) {
    // When the user changes their language selection from the dropbox,
    // update the editor's text to either the user's saved code
    // from LocalStorage, or make a request for the starter code.
    if (this.props.language !== prevProps.language) {
      const value = localStorage.getItem(this.props.cookieUserCodeKey) || (await getStarterCode(this.props.match.params.id, this.props.language)) || '';
      this.props.updateEditorText(value);
    }
  }

  render(): JSX.Element {
    return (
      <LanguageDropdown
        mode={this.props.mode}
        language={this.props.language}
        modeOptions={codeMirrorModeOptions}
        onSelect={(event: SelectChangeEvent) => this.handleDropdownSelect(event.target.value as string)}
      />
    );
  }
}

export default withRouter(connector(LanguageDropdownContainer));
