import {Controlled as CodeMirror} from 'react-codemirror2';
import styled from 'styled-components';

export const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    height: 100% !important;
    width: 100% !important;
  }
  .CodeMirror * {
    font-family: 'Fira Code';
  }
`;
