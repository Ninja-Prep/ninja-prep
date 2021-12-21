import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  pre {
    border-radius: 5px;
    background-color: #f5f7fa;
    color: rgb(0, 0, 0);
    padding: 20px;
    font-family: 'Menlo';
    border: 1px solid #bcc0c4;
    width: auto;
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
  color: orange;
`;
export const Hard = styled.span`
  color: red;
`;
