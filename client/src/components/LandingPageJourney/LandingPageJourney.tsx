import React from 'react';
import {FlexBoxContainer, FlexRow, TextSizing, HeadingFont, ImgSizing, BodyFont, Img, SubHeadingFont, SectionSpacing} from './styled';
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

function LandingPageJourney(): JSX.Element {
  return (
    <SectionSpacing>
      <HeadingFont>{HOW_IT_WORKS}</HeadingFont>
      <FlexBoxContainer>
        <FlexRow>
          <ImgSizing>
            <Img src="/images/Algorithms.png" />
          </ImgSizing>
          <TextSizing>
            <div>
              <SubHeadingFont>{DISCOVER_IN_DEMAND}</SubHeadingFont>
              <BodyFont>{DISCOVER_IN_DEMAND_BODY}</BodyFont>
            </div>
          </TextSizing>
        </FlexRow>
        <FlexRow>
          <ImgSizing>
            <Img src="/images/Core_Concepts.png" />
          </ImgSizing>
          <TextSizing>
            <div>
              <SubHeadingFont>{LEARN_CORE_CONCEPTS}</SubHeadingFont>
              <BodyFont>{LEARN_CORE_CONCEPTS_BODY}</BodyFont>
            </div>
          </TextSizing>
        </FlexRow>
        <FlexRow>
          <ImgSizing>
            <Img src="/images/Code_Along.png" />
          </ImgSizing>
          <TextSizing>
            <div>
              <SubHeadingFont>{CODE_ALONG_TO_VIDEO}</SubHeadingFont>
              <BodyFont>{CODE_ALONG_TO_VIDEO_BODY}</BodyFont>
            </div>
          </TextSizing>
        </FlexRow>
        <FlexRow>
          <ImgSizing>
            <Img src="/images/Instant_Feedback.png" />
          </ImgSizing>
          <TextSizing>
            <div>
              <SubHeadingFont>{INSTANT_FEEDBACK}</SubHeadingFont>
              <BodyFont>{INSTANT_FEEDBACK_BODY}</BodyFont>
            </div>
          </TextSizing>
        </FlexRow>
        <FlexRow>
          <ImgSizing>
            <Img src="/images/Dream_Job.png" />
          </ImgSizing>
          <TextSizing>
            <div>
              <SubHeadingFont>{DREAM_JOB}</SubHeadingFont>
              <BodyFont>{DREAM_JOB_BODY}</BodyFont>
            </div>
          </TextSizing>
        </FlexRow>
      </FlexBoxContainer>
    </SectionSpacing>
  );
}

export default LandingPageJourney;
