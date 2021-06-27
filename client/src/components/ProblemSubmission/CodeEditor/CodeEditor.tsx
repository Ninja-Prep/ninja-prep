import React from 'react';

import {EditorConfiguration} from 'codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import {StyledCodeMirror} from './styled';

interface CodeEditorProps {
  textValue: string;
  editorConfig: EditorConfiguration;
  textHandler: (value: string) => void;
}

const CodeEditor = (props: CodeEditorProps): JSX.Element => {
  return (
    <StyledCodeMirror
      value={props.textValue}
      options={props.editorConfig}
      onBeforeChange={(editor, data, value) => {
        props.textHandler(value);
      }}
    />
  );
};

export default CodeEditor;
