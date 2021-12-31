import styled from 'styled-components';
import Box from '@mui/material/Box';
import * as CoreUI from 'uiLibrary/CoreUI';

export const CenterContent = styled(Box)`
  text-align: center !important;
  padding: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 550px;
  min-width: 390px;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #24d1f3;
  box-shadow: 0 5px 50px rgba(36, 209, 243, 20%);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT};
  margin: 32px 0 16px 0;
`;

export const ModalSubtext = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  color: #595959;
  margin-bottom: 32px;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
