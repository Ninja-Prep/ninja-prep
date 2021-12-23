import styled, {css} from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';
import GradeIcon from '@mui/icons-material/Grade';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SchoolIcon from '@mui/icons-material/School';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

export const NavigateNext = styled(NavigateNextIcon)`
  transform: scale(1.5);
`;

export const HeadingFont = styled.p`
  ${CoreUI.ROBOTO_BOLD_FONT}
  padding: ${CoreUI.EXTRA_LARGE_SPACING} 0;
  text-align: center;
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${CoreUI.EXTRA_LARGE_SPACING};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16%;
  flex-wrap: wrap;
`;

export const FlexBenefit = styled.div`
  flex: 1 1 300px;
`;

export const BodyFont = styled.p`
  ${CoreUI.OPEN_SANS_REGULAR}
  color: ${CoreUI.BODY_TEXT_COLOR};
  padding-left: 30px;
  margin: 0;
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: #f8fcff;
  margin-left: calc(-50vw + 50%);
`;

export const BenefitsContainer = styled.div`
  ${CoreUI.STANDARDIZED_PAGE_PADDING}
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: ${CoreUI.EXTRA_LARGE_SPACING};
`;

export const BenefitHeading = styled.div`
  ${CoreUI.ROBOTO_BOLD_FONT_LIGHT}
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`;

export const ExploreProblemsButton = styled.div`
  margin-top: ${CoreUI.EXTRA_LARGE_SPACING};
`;
