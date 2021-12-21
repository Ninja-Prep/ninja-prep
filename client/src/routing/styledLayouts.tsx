/* 
The header is 70 px
Content below needs to be shifted the height of the header
 */

import styled from 'styled-components';

export const HeaderPadding = styled.div`
  padding-top: 85px;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
