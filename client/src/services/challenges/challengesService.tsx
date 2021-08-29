import axios from 'axios';
import {ChallengeLink, ProblemDetails} from 'utils/types/challenges';

/**
 * @returns List of links for each problem
 */
export async function getChallengeLinks(): Promise<ChallengeLink[]> {
  const challengesResponse = (
    await axios({
      method: 'GET',
      url: `/api/challenges/getChallenges`,
    })
  ).data;

  return challengesResponse;
}

export const getProblemDetails = async (paramsId: string, programmingLanguage: string): Promise<ProblemDetails> => {
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
    isFree: responseData.isFree,
  };
  return problemDetails;
};

/**
 *
 * @param paramsId Problem ID
 * @param programmingLanguage
 * @returns the starter code for the problem in the selected language.
 */
export const getStarterCode = async (paramsId: string, programmingLanguage: string): Promise<string> => {
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
