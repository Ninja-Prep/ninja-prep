import {UnControlled as CodeMirror} from 'react-codemirror2';
import styled from 'styled-components';

export const UncontrolledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    height: 100% !important;
    width: 100% !important;
  }
  .CodeMirror * {
    font-family: 'Fira Code';
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: ${(props) => (props.options?.readOnly ? 'hidden' : 'visible')};
  }
`;
