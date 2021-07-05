import axios from 'axios';
import {UserSubmissionOutput} from 'utils/types/challenges';
import {ChallengeLink, ProblemDetails} from 'utils/types/challenges';

import {isUserSubmissionOutput} from '../../utils/types/challenges/index';

/**
 * @returns List of links for each problem
 */
export async function findChallengeLinks(): Promise<ChallengeLink[]> {
  const challengesResponse = (
    await axios({
      method: 'GET',
      url: `/api/challenges/findchallenges`,
    })
  ).data;

  const challenges: ChallengeLink[] = challengesResponse.map(
    // eslint-disable-next-line camelcase
    (challenge: {title: string; problem_path: string}) => {
      return {
        title: challenge.title,
        problemPath: challenge.problem_path,
      };
    },
  );

  return challenges;
}

export const getProblemDetails = async (
  paramsId: string,
  programmingLanguage: string,
): Promise<ProblemDetails> => {
  console.log(programmingLanguage);
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

export async function submitProblem(
  textValue: string,
  language: string,
  problemId: string,
): Promise<UserSubmissionOutput> {
  console.log(textValue);
  const response = (
    await axios.post(`/api/submisson/execute/${problemId}`, {
      codeSnippet: textValue,
      programmingLanguage: language,
    })
  ).data;

  return isUserSubmissionOutput(response) ? response : null;
}
