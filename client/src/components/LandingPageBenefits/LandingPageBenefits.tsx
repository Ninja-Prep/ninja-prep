import React from 'react';
import {
  FlexBoxContainer,
  BenefitsGradeIcon,
  BenefitsArticleIcon,
  BenefitsCodeIcon,
  FlexBenefit,
  FlexRow,
  HeadingFont,
  BodyFont,
  BackgroundContainer,
  BenefitsContainer,
  BenefitHeading,
  BenefitsCourseIcon,
  BenefitsBoltIcon,
  BenefitsVideoIcon,
  StartCodingButton,
} from './styled';

import {
  BENEFITS_CAREER_TITLE,
  BENEFITS_MULTIPLE_LANGUAGES_BODY,
  BENEFITS_MULTIPLE_LANGUAGES,
  BENEFITS_BROWSER_COMPILER_BODY,
  BENEFITS_BROWSER_COMPILER,
  BENEFITS_CRASH_COURSE_BODY,
  BENEFITS_CRASH_COURSE,
  BENEFITS_PREMIUM,
  BENEFITS_PREMIUM_BODY,
  BENEFITS_ARTICLES,
  BENEFITS_ARTICLE_BODY,
  BENEFITS_CODE_WALKTHROUGHS,
  BENEFITS_CODE_WALKTHROUGHS_BODY,
} from 'utils/stringIds.json';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BenefitsList = [
  {
    left: {
      icon: <BenefitsGradeIcon />,
      title: BENEFITS_PREMIUM,
      bodyContent: BENEFITS_PREMIUM_BODY,
    },
    right: {
      icon: <BenefitsArticleIcon />,
      title: BENEFITS_ARTICLES,
      bodyContent: BENEFITS_ARTICLE_BODY,
    },
  },
  {
    left: {
      icon: <BenefitsCodeIcon />,
      title: BENEFITS_CODE_WALKTHROUGHS,
      bodyContent: BENEFITS_CODE_WALKTHROUGHS_BODY,
    },
    right: {
      icon: <BenefitsCourseIcon />,
      title: BENEFITS_CRASH_COURSE,
      bodyContent: BENEFITS_CRASH_COURSE_BODY,
    },
  },
  {
    left: {
      icon: <BenefitsBoltIcon />,
      title: BENEFITS_BROWSER_COMPILER,
      bodyContent: BENEFITS_BROWSER_COMPILER_BODY,
    },
    right: {
      icon: <BenefitsVideoIcon />,
      title: BENEFITS_MULTIPLE_LANGUAGES,
      bodyContent: BENEFITS_MULTIPLE_LANGUAGES_BODY,
    },
  },
];

interface Props {
  disableCodingButton: boolean;
}

LandingPageBenefits.defaultProps = {
  disableCodingButton: false,
};

function LandingPageBenefits(props: Props): JSX.Element {
  return (
    <BackgroundContainer>
      <BenefitsContainer>
        <HeadingFont>{BENEFITS_CAREER_TITLE}</HeadingFont>
        <FlexBoxContainer>
          {BenefitsList.map((benefits) => {
            return (
              <FlexRow>
                <FlexBenefit>
                  <BenefitHeading>
                    {benefits.left.icon}
                    <span>{benefits.left.title}</span>
                  </BenefitHeading>
                  <BodyFont>{benefits.left.bodyContent}</BodyFont>
                </FlexBenefit>

                <FlexBenefit>
                  <BenefitHeading>
                    {benefits.right.icon}
                    <span>{benefits.right.title}</span>
                  </BenefitHeading>
                  <BodyFont>{benefits.right.bodyContent}</BodyFont>
                </FlexBenefit>
              </FlexRow>
            );
          })}
        </FlexBoxContainer>
        {!props.disableCodingButton && (
          <StartCodingButton>
            Start Coding <NavigateNextIcon />
          </StartCodingButton>
        )}
      </BenefitsContainer>
    </BackgroundContainer>
  );
}

export default LandingPageBenefits;
