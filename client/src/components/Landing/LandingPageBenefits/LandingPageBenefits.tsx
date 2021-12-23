import React from 'react';
import * as Styled from './styled';

import {
  EXPLORE_PROBLEMS,
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
import {LightBlueLinkButton} from 'uiLibrary/CoreUI';

const BenefitsList = [
  {
    left: {
      icon: <Styled.BenefitsGradeIcon />,
      title: BENEFITS_PREMIUM,
      bodyContent: BENEFITS_PREMIUM_BODY,
    },
    right: {
      icon: <Styled.BenefitsArticleIcon />,
      title: BENEFITS_ARTICLES,
      bodyContent: BENEFITS_ARTICLE_BODY,
    },
  },
  {
    left: {
      icon: <Styled.BenefitsCodeIcon />,
      title: BENEFITS_CODE_WALKTHROUGHS,
      bodyContent: BENEFITS_CODE_WALKTHROUGHS_BODY,
    },
    right: {
      icon: <Styled.BenefitsCourseIcon />,
      title: BENEFITS_CRASH_COURSE,
      bodyContent: BENEFITS_CRASH_COURSE_BODY,
    },
  },
  {
    left: {
      icon: <Styled.BenefitsBoltIcon />,
      title: BENEFITS_BROWSER_COMPILER,
      bodyContent: BENEFITS_BROWSER_COMPILER_BODY,
    },
    right: {
      icon: <Styled.BenefitsVideoIcon />,
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
    <Styled.BackgroundContainer>
      <Styled.BenefitsContainer>
        <Styled.HeadingFont>{BENEFITS_CAREER_TITLE}</Styled.HeadingFont>
        <Styled.FlexBoxContainer>
          {BenefitsList.map((benefits) => {
            return (
              <Styled.FlexRow key={benefits.left.title}>
                <Styled.FlexBenefit>
                  <Styled.BenefitHeading>
                    {benefits.left.icon}
                    <span>{benefits.left.title}</span>
                  </Styled.BenefitHeading>
                  <Styled.BodyFont>{benefits.left.bodyContent}</Styled.BodyFont>
                </Styled.FlexBenefit>

                <Styled.FlexBenefit>
                  <Styled.BenefitHeading>
                    {benefits.right.icon}
                    <span>{benefits.right.title}</span>
                  </Styled.BenefitHeading>
                  <Styled.BodyFont>{benefits.right.bodyContent}</Styled.BodyFont>
                </Styled.FlexBenefit>
              </Styled.FlexRow>
            );
          })}
        </Styled.FlexBoxContainer>
        {!props.disableCodingButton && (
          <Styled.ExploreProblemsButton>
            <LightBlueLinkButton to="/challenges" text={EXPLORE_PROBLEMS} icon={<Styled.NavigateNext />} />
          </Styled.ExploreProblemsButton>
        )}
      </Styled.BenefitsContainer>
    </Styled.BackgroundContainer>
  );
}

export default LandingPageBenefits;
