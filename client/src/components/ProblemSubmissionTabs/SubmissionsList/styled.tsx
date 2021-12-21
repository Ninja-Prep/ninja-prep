import styled from 'styled-components';

export const SubmissionsContainer = styled.div`
  .MuiPaper-elevation2 {
    box-shadow: none;
  }
  button: focus {
    outline: 1px auto;
  }
`;

export const Accepted = styled.div`
  font-weight: bold;
  color: green;
`;

export const WrongAnswer = styled.div`
  color: red;
`;

export const Capitalize = styled.span`
  text-transform: capitalize;
`;
