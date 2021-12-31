import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const HeaderText = styled.p`
  font-weight: bold;
  color: black;
`;

export const ContentDetail = styled.p`
  display: inline-block;
  border: 1px solid #bcc0c4;
  white-space: pre;
  font-family: Hack, monospace;
  border-radius: 0.25rem !important;
  background-color: ${CoreUI.BACKGROUND_GREY};
  padding: 1rem !important;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  line-break: strict;
  hyphens: none;
  -webkit-hyphens: none;
  -moz-hyphens: none;
`;

export const Container = styled.div`
  margin-top: 16px;
`;
