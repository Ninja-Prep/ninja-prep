import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  min-width: 300px;
  img {
    max-width: 100%;
    max-height: 400px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  pre {
    border-radius: 5px;
    background-color: #f5f7fa;
    color: rgb(0, 0, 0);
    padding: 20px;
    font-family: 'Menlo';
    border: 1px solid #bcc0c4;
    width: fit-content;
  }
  code {
    padding: 4px;
    background-color: #f5f7fa;
    border-radius: 5px;
    border: 1px solid #bcc0c4;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
`;

export const Easy = styled.span`
  color: green;
`;
export const Medium = styled.span`
  color: ${CoreUI.DARK_PREMIUM_COLOR};
`;
export const Hard = styled.span`
  color: red;
`;
