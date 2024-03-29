import styled from 'styled-components';
import LockIcon from '@mui/icons-material/Lock';
import {Box} from '@mui/material';
import * as CoreUI from 'uiLibrary/CoreUI';

export const LockedPremiumContainer = styled(Box)`
  height: 100vh;
  margin: auto 0;
  padding: 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  max-width: 450px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoldGetPremiumHeader = styled.b`
  display: block;
  padding: 10px 0px 0px 0px;
  font-size: 1.5rem;
`;

export const PremiumLockIcon = styled(LockIcon)`
  color: orange;
  width: 60 !important;
  height: 60 !important;
  padding: 10px;
  display: block;
  text-align: center;
`;

export const GoldPremiumHeader = styled.b`
  font-size: 1.3rem;
  color: #ee953d;
`;

export const TextSizing = styled.p`
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 12px;
  text-align: center;
`;
