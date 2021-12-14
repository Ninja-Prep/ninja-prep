import React from 'react';

import LanguageDropdown from 'components/ProblemSubmission/containers/LanguageDropdown/LanguageDropdownContainer';
import CodeEditorResetCodeContainer from '../containers/CodeEditorResetCode/CodeEditorResetCodeContainer';
import * as Styled from './styled';

const CodeEditorUserSettings = (): JSX.Element => {
  return (
    <Styled.Row>
      <LanguageDropdown />
      <CodeEditorResetCodeContainer />
    </Styled.Row>
  );
};

export default CodeEditorUserSettings;
