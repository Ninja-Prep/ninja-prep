import styled from 'styled-components';
import LockIcon from '@mui/icons-material/Lock';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.div`
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  text-decoration: none;
  a {
    color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
    text-decoration: none;
  }
`;

export const DropdownIcon = styled.div`
  padding: 5px;
  color: ${CoreUI.DEFAULT_BLACK_TEXT_COLOR};
  text-decoration: none;
`;

export const PremiumLockIcon = styled(LockIcon)`
  color: #ee953d;
`;

export const PremiumTextColor = styled.div`
  color: #ee953d;
`;

export const ImageWrapper = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
