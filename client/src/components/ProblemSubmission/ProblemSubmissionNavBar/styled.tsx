import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  padding: 12px 12px;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.div`
  display: flex;
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  flex: 1 1 0;
  align-items: center;
  justify-content: center;
`;
