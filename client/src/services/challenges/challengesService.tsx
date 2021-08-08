import axios from 'axios';
import {UserSubmissionOutput} from 'utils/types/challenges';
import {ChallengeLink, ProblemDetails} from 'utils/types/challenges';

import {isUserSubmissionOutput} from '../../utils/types/challenges/index';

/**
 * @returns List of links for each problem
 */
export async function getChallengeLinks(): Promise<ChallengeLink[]> {
  const challengesResponse = (
    await axios({
      method: 'GET',
      url: `/api/challenges/getchallenges`,
    })
  ).data;

  const challenges: ChallengeLink[] = challengesResponse.map(
    // eslint-disable-next-line camelcase
    (challenge: {title: string; problemPath: string}) => {
      return {
        title: challenge.title,
        problemPath: challenge.problemPath,
      };
    },
  );

  return challenges;
}

export const getProblemDetails = async (
  paramsId: string,
  programmingLanguage: string,
): Promise<ProblemDetails> => {
  const responseData = (
    await axios({
      method: 'POST',
      url: `/api/challenges/${paramsId}`,
      data: {
        programmingLanguage,
      },
    })
  ).data;

  const problemDetails: ProblemDetails = {
    description: responseData.description,
    hints: responseData.hints,
    starterCode: responseData.starterCode,
    testCases: responseData.testCases,
    title: responseData.title,
  };
  return problemDetails;
};

/**
 * 
 * @param paramsId Problem ID
 * @param programmingLanguage 
 * @returns the starter code for the problem in the selected language.
 */
export const getProblemStarterCode = async (
  paramsId: string,
  programmingLanguage: string,
): Promise<string> => {
  const responseData = (
    await axios({
      method: 'POST',
      url: `/api/challenges/${paramsId}/getStarterCode`,
      data: {
        programmingLanguage,
      },
    })
  ).data;

  return responseData.starterCode;
};

export async function submitProblem(
  textValue: string,
  language: string,
  problemId: string,
): Promise<UserSubmissionOutput> {
  const response = (
    await axios.post(`/api/submisson/execute/${problemId}`, {
      codeSnippet: textValue,
      programmingLanguage: language,
    })
  ).data;

  return isUserSubmissionOutput(response) ? response : null;
}
