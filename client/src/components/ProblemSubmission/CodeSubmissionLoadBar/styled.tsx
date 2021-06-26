import styled from 'styled-components';

export const BlinkText = styled.h5`
  font-weight: bold;
  color: black;
  animation: blinker 3s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
