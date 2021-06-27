import styled from 'styled-components';

export const BlinkText = styled.h5`
  font-weight: bold;
  color: black;
  animation: blinker 4s linear infinite;
  font-size: 1.25rem;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const BlinkContainer = styled.div`
  padding: 10px 0px 10px 10px;
`;
