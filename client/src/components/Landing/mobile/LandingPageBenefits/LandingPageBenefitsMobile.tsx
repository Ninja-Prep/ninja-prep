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
    icon: <Styled.BenefitsGradeIcon />,
    title: BENEFITS_PREMIUM,
    bodyContent: BENEFITS_PREMIUM_BODY,
  },
  {
    icon: <Styled.BenefitsArticleIcon />,
    title: BENEFITS_ARTICLES,
    bodyContent: BENEFITS_ARTICLE_BODY,
  },
  {
    icon: <Styled.BenefitsCodeIcon />,
    title: BENEFITS_CODE_WALKTHROUGHS,
    bodyContent: BENEFITS_CODE_WALKTHROUGHS_BODY,
  },
  {
    icon: <Styled.BenefitsCourseIcon />,
    title: BENEFITS_CRASH_COURSE,
    bodyContent: BENEFITS_CRASH_COURSE_BODY,
  },
  {
    icon: <Styled.BenefitsBoltIcon />,
    title: BENEFITS_BROWSER_COMPILER,
    bodyContent: BENEFITS_BROWSER_COMPILER_BODY,
  },
  {
    icon: <Styled.BenefitsVideoIcon />,
    title: BENEFITS_MULTIPLE_LANGUAGES,
    bodyContent: BENEFITS_MULTIPLE_LANGUAGES_BODY,
  },
];

interface Props {
  disableCodingButton: boolean;
}

LandingPageBenefitsMobile.defaultProps = {
  disableCodingButton: false,
};

function LandingPageBenefitsMobile(props: Props): JSX.Element {
  return (
    <Styled.BackgroundContainer>
      <Styled.BenefitsContainer>
        <Styled.HeadingFont>{BENEFITS_CAREER_TITLE}</Styled.HeadingFont>
        <Styled.FlexBoxContainer>
          {BenefitsList.map((benefits) => {
            return (
              <div key={benefits.title}>
                <Styled.BenefitHeading>
                  {benefits.icon}
                  <span>{benefits.title}</span>
                </Styled.BenefitHeading>
                <Styled.BodyFont>{benefits.bodyContent}</Styled.BodyFont>
              </div>
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

export default LandingPageBenefitsMobile;
