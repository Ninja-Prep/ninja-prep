import {Col, Nav, Row, Tab} from 'react-bootstrap';
import styled from 'styled-components';

export const NavPills = styled(Nav)`
  flex-direction: column;

  &.active {
    background-color: yellow;
    color: green;
  }
`;

export const HeaderContainer = styled.div`
  padding: 15px;
`;

export const FloatRightButtons = styled.div`
  float: right;
`;

export const ZeroXPaddingCol = styled(Col)`
  padding-left: 0;
  padding-right: 0;
`;

export const TabContentBackground = styled(Tab.Content)`
  background-color: white;
  padding: 20px;
  height: 100%;
`;

export const RowHeightContainer = styled(Row)`
  height: 100%;
`;
