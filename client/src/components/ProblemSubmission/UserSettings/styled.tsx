import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const SettingsContainer = styled.div`
  padding: 50px;
  width: 60%;
  margin: 60px auto 120px auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
`;

export const SettingsHeader = styled.b`
  font-size: 32px;
`;

export const TextSizing = styled.span`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 10px;
`;

export const OauthProviderSizing = styled.span`
  text-transform: capitalize;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 10px;
`;

export const BoldSubheading = styled.div`
  margin: 50px 0px 20px 0px;
  font-size: 18px;
  font-weight: bold;
`;

export const SubcontentPadding = styled.div`
  padding: 10px 15px;
`;

export const ButtonContainer = styled.div`
  margin: auto;
  color: #ee953d;
`;

export const UserSettingsIcon = styled(SettingsIcon)`
  color: #2a2a3a !important;
  width: 120 !important;
  height: 120 !important;
  padding: 10px;
`;

export const GetPremiumIcon = styled(ChevronRightIcon)`
  margin-left: 5px !important;
  margin-top: 3px !important;
  margin: auto;
  float: right;
  color: #ee953d;
`;

export const ContactFooter = styled.div`
  margin-top: 15px;
  color: grey;
`;

export const ContactEmailColor = styled.span`
  color: #0c6991;
`;
