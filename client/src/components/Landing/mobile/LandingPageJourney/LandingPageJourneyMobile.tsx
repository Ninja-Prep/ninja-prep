import React from 'react';
import * as Styled from './styled';
import {
  HOW_IT_WORKS,
  DISCOVER_IN_DEMAND,
  DISCOVER_IN_DEMAND_BODY,
  LEARN_CORE_CONCEPTS,
  LEARN_CORE_CONCEPTS_BODY,
  CODE_ALONG_TO_VIDEO,
  CODE_ALONG_TO_VIDEO_BODY,
  INSTANT_FEEDBACK,
  INSTANT_FEEDBACK_BODY,
  DREAM_JOB,
  DREAM_JOB_BODY,
} from 'utils/stringIds.json';

function LandingPageJourneyMobile(): JSX.Element {
  return (
    <Styled.SectionSpacing>
      <Styled.HeadingFont>{HOW_IT_WORKS}</Styled.HeadingFont>
      <Styled.FlexBoxContainer>
        <Styled.FlexCol>
          <Styled.ImgSizing>
            <Styled.Img src="/images/Algorithms.png" />
          </Styled.ImgSizing>
          <Styled.TextContainer>
            <Styled.SubHeadingFont>{DISCOVER_IN_DEMAND}</Styled.SubHeadingFont>
            <Styled.BodyFont>{DISCOVER_IN_DEMAND_BODY}</Styled.BodyFont>
          </Styled.TextContainer>
        </Styled.FlexCol>
        <Styled.FlexCol>
          <Styled.ImgSizing>
            <Styled.Img src="/images/Core_Concepts.png" />
          </Styled.ImgSizing>
          <Styled.TextContainer>
            <Styled.SubHeadingFont>{LEARN_CORE_CONCEPTS}</Styled.SubHeadingFont>
            <Styled.BodyFont>{LEARN_CORE_CONCEPTS_BODY}</Styled.BodyFont>
          </Styled.TextContainer>
        </Styled.FlexCol>
        <Styled.FlexCol>
          <Styled.ImgSizing>
            <Styled.Img src="/images/Code_Along.png" />
          </Styled.ImgSizing>
          <Styled.TextContainer>
            <Styled.SubHeadingFont>{CODE_ALONG_TO_VIDEO}</Styled.SubHeadingFont>
            <Styled.BodyFont>{CODE_ALONG_TO_VIDEO_BODY}</Styled.BodyFont>
          </Styled.TextContainer>
        </Styled.FlexCol>
        <Styled.FlexCol>
          <Styled.ImgSizing>
            <Styled.Img src="/images/Instant_Feedback.png" />
          </Styled.ImgSizing>
          <Styled.TextContainer>
            <Styled.SubHeadingFont>{INSTANT_FEEDBACK}</Styled.SubHeadingFont>
            <Styled.BodyFont>{INSTANT_FEEDBACK_BODY}</Styled.BodyFont>
          </Styled.TextContainer>
        </Styled.FlexCol>
        <Styled.FlexCol>
          <Styled.ImgSizing>
            <Styled.Img src="/images/Dream_Job.png" />
          </Styled.ImgSizing>
          <Styled.TextContainer>
            <Styled.SubHeadingFont>{DREAM_JOB}</Styled.SubHeadingFont>
            <Styled.BodyFont>{DREAM_JOB_BODY}</Styled.BodyFont>
          </Styled.TextContainer>
        </Styled.FlexCol>
      </Styled.FlexBoxContainer>
    </Styled.SectionSpacing>
  );
}

export default LandingPageJourneyMobile;
