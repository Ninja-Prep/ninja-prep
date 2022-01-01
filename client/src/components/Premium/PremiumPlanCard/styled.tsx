import * as CoreUI from 'uiLibrary/CoreUI';

import styled, {css} from 'styled-components';
import GradeIcon from '@mui/icons-material/Grade';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SchoolIcon from '@mui/icons-material/School';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';

const iconCss = css`
  color: ${CoreUI.LIGHT_BLUE};
  margin-right: 10px;
  transform: scale(1.5);
`;

export const BenefitsGradeIcon = styled(GradeIcon)`
  ${iconCss}
`;
export const BenefitsArticleIcon = styled(LibraryBooksIcon)`
  ${iconCss}
`;
export const BenefitsVideoIcon = styled(PlayArrowIcon)`
  ${iconCss}
`;
export const BenefitsCourseIcon = styled(SchoolIcon)`
  ${iconCss}
`;
export const BenefitsBoltIcon = styled(BoltIcon)`
  ${iconCss}
`;
export const BenefitsCodeIcon = styled(CodeIcon)`
  ${iconCss}
`;

export const CardHeader = styled.div.attrs((props: {backgroundColor: string}) => props)`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 24px 48px;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const PlanDescription = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  ${CoreUI.OPEN_SANS_REGULAR}
  color: ${CoreUI.BODY_TEXT_COLOR};
`;

export const Card = styled.div`
  padding: 16px;
`;

export const SubscribeButton = styled.div`
  justify-self: flex-end;
  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  min-height: 400px;
  max-width: 500px;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const BestValue = styled.div`
  ${CoreUI.OPEN_SANS_MEDIUM};
  padding: 4px;
  text-align: center;
  ${CoreUI.SIMPLE_BORDER_BOTTOM};
`;
