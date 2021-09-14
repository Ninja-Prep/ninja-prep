import styled from 'styled-components';
import {Image, Dropdown, Nav} from 'react-bootstrap';
import LockIcon from '@material-ui/icons/Lock';
import * as CoreUI from 'uiLibrary/CoreUI';

export const DropdownText = styled.p`
  color: #6c757d !important;
`;

export const InlineBlockDropdownIcon = styled.div`
  padding: 5px;
  display: inline-block;
`;

export const DropdownMenu = styled(Dropdown)`
  padding-left: 15px;
`;

export const A = styled.a`
  text-decoration: none !important;
  color: transparent;
  :hover {
    text-decoration: none;
    cursor: pointer;
    color: transparent;
  }
`;

export const PremiumLockIcon = styled(LockIcon)`
  color: #ee953d;
`;

export const PremiumTextColor = styled.div`
  display: inline-block;
  color: #ee953d;
`;

export const ImageWrapper = styled(Image)`
  width: 45px;
  height: 45px;
`;
