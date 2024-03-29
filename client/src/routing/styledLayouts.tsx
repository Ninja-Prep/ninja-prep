/* 
The header is 70 px
Content below needs to be shifted the height of the header
 */

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 770px) {
    margin: 0;
    padding: 85px 16% 0 16%;
  }
  @media only screen and (max-width: 769px) {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    padding: 97px 32px;
    overflow-x: hidden;
  }
`;
