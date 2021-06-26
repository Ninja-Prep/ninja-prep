import {ReflexElement, ReflexSplitter} from 'react-reflex';
import styled from 'styled-components';

export const SubmissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const VerticalSplitter = styled(ReflexSplitter)`
  background-color: #f3f7f8 !important;
  width: 10px;
`;

export const CodeEditorReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
`;

export const TestCaseReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
  color: white;
  background-color: #f3f7f8 !important;
`;

export const OuterEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MiddleEditorWrapper = styled.div`
  flex: 1 1 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0px;
`;

export const EditorSettingsWrapper = styled.div`
  flex: none;
`;

export const InnerAreaWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;
