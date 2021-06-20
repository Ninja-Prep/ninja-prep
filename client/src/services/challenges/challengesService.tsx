import axios from 'axios';

import {ChallengeLink} from '../../utils/types/challenges/index';

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
