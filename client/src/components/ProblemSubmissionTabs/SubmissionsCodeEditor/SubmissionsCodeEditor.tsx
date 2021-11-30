import * as React from 'react';

import {UncontrolledCodeMirror} from './styled';

interface Props {
  textValue: string;
  mode?: string;
}

function SubmissionsCodeEditor(props: Props): JSX.Element {
  const editorOptions = {
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    readOnly: true,
  };
  return <UncontrolledCodeMirror options={{...editorOptions, mode: props.mode}} value={props.textValue} />;
}

export default SubmissionsCodeEditor;
