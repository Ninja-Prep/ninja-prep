import {Button, Container} from 'react-bootstrap';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LockIcon from '@material-ui/icons/Lock';

export const HeightWrapper = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 30%;
  left: 50%;
`;

export const LockedPremiumContainer = styled(Container)`
  padding: 50px;
  // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 450px;
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

export const ExploreProblemsIcon = styled(ChevronRightIcon)`
  margin-left: 5px !important;
  margin-top: 3px !important;
  margin: auto;
  float: right;
`;

export const GoldPremiumHeader = styled.b`
  font-size: 1.3rem;
  color: #ee953d;
`;

export const TextSizing = styled.p`
  font-size: 1.2rem;
`;

export const ButtonContainer = styled.div`
  margin: 50px auto;
  text-align: center;
  font-size: 5rem;
`;
