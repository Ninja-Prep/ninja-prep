import {ReflexElement} from 'react-reflex';
import styled from 'styled-components';

export const SubmissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: calc(-50vw + 50%);
  width: 100vw;

  .testcaseSplitter {
    height: 13px !important;
    background-color: #d1d1d1 !important;
    border-color: #f3f7f8 !important;
  }
`;

export const CodeEditorReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
`;

export const SubmissionContentReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
  color: white;
  background-color: #f3f7f8 !important;
`;
