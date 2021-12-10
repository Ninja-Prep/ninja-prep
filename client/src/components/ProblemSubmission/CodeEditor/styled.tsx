import {Controlled as CodeMirror} from 'react-codemirror2';
import styled from 'styled-components';

export const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    height: 100% !important;
    width: 100% !important;
    -webkit-font-variant-ligatures: none !important;
    font-variant-ligatures: none !important;
  }
  .CodeMirror * {
    font-family: Hack, monospace;
    -webkit-font-variant-ligatures: none !important;
    font-variant-ligatures: none !important;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: ${(props) => (props.options?.readOnly ? 'hidden' : 'visible')};
  }
`;
