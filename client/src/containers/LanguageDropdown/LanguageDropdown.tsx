import React, {Component} from 'react';

import LanguageDropdown from 'components/ProblemSubmission/UserSettings/LanguageDropdown';
import {connect, ConnectedProps} from 'react-redux';
import {changeMode} from 'redux/editorSettings/actions';
import {getLanguage} from 'redux/editorSettings/reducer';
import {RootState} from 'redux/rootReducer';
import {modeOptions} from 'utils/CodeEditorLanguages';

const mapStateToProps = (state: RootState) => ({
  language: getLanguage(state),
});

const connector = connect(mapStateToProps, {changeMode});

type Props = ConnectedProps<typeof connector>;

class LanguageDropdownContainer extends Component<Props> {
  handleDropdownSelect(event: string | null) {
    this.props.changeMode(event);
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

export default connector(LanguageDropdownContainer);
