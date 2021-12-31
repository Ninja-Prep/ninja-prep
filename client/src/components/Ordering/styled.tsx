import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Container = styled.div`
  height: 100%;
`;

export const OrderContainer = styled.div`
  margin-top: 75px;
  padding: 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;

  @media only screen and (max-width: 1280px) {
    padding: 25px;
  }
`;

export const BoldThankYouHeader = styled.b`
  font-size: 1.3rem;
`;

export const CircleCheckIcon = styled(CheckCircleIcon)`
  color: green;
  width: 60 !important;
  height: 60 !important;
  padding: 10px;
`;

export const ExploreProblemsIcon = styled(ChevronRightIcon)`
  margin-left: 5px !important;
  margin-top: 3px !important;
  margin: auto;
  float: right;
`;

export const GoldBoldThankYouHeader = styled.b`
  font-size: 1.3rem;
  color: #ee953d;
`;

export const TextSizing = styled.p`
  font-size: 1.2rem;
`;

export const BoldSubheading = styled.div`
  margin-top: 50px;
  font-size: 1.3rem;
`;

export const SubcontentPadding = styled.div`
  padding: 10px 15px;
`;

export const SubscriptionExpirationSizing = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
`;

export const OauthProviderSizing = styled.div`
  font-size: 1.3rem;
  text-transform: capitalize;
  margin-top: 20px;
`;

export const EmailSizing = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ErrorIcon = styled(ErrorOutlineIcon)`
  color: red;
  width: 60 !important;
  height: 60 !important;
  padding: 10px;
`;

export const ThankYouHeader = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
  }
`;
