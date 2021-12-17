import CodeEditorUserSettings from 'components/ProblemSubmission/CodeEditorSettings/CodeEditorUserSettings';
import {ReflexElement, ReflexSplitter} from 'react-reflex';
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

  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.5s; /* Firefox < 16 */
  -ms-animation: fadein 1.5s; /* Internet Explorer */
  -o-animation: fadein 1.5s; /* Opera < 12.1 */
  animation: fadein 1.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const VerticalSplitter = styled(ReflexSplitter)`
  background-color: #f3f7f8 !important;
  width: 10px;
`;

export const CodeEditorReflex = styled(ReflexElement)`
  overflow-x: hidden !important;
`;

export const SubmissionContentReflex = styled(ReflexElement)`
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

export const CodeEditorSettings = styled(CodeEditorUserSettings)`
  flex: none;
`;

export const InnerAreaWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;

export const WidthContainer = styled.div`
  background-color: #f8fcff;
  margin-left: calc(-50vw + 50%);
`;
