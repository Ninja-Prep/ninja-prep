import CodeEditorUserSettings from 'components/ProblemSubmission/CodeEditorSettings/CodeEditorUserSettings';
import {ReflexElement, ReflexSplitter} from 'react-reflex';
import styled, {createGlobalStyle} from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const GlobalStyle = createGlobalStyle`
body {
  overflow-x: visible !important;
}
`;

export const SubmissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: calc(-50vw + 50%);
  width: 100vw;
  min-width: 896px;

  .testcaseSplitter {
    height: 13px !important;
    background-color: #d1d1d1 !important;
    border-color: #f3f7f8 !important;
  }
  ${CoreUI.FadeInCSS}
`;

export const VerticalSplitter = styled(ReflexSplitter)`
  width: 10px;
`;

export const CodeEditorReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
`;

export const SubmissionContentReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
`;

export const OuterEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: fit-content;
`;

export const MiddleEditorWrapper = styled.div`
  flex: 1 1 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0px;
`;

export const CodeEditorSettings = styled(CodeEditorUserSettings)`
  flex: none;
`;

export const InnerAreaWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;
