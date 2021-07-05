import {Request, Response} from 'express';
import {logger} from '@logger/logger';
import got from 'got';

export async function submitProblem(
  req: Request,
  res: Response,
): Promise<void> {
  const problemBO = req.problemBO;
  try {
    const {body} = await got.post(
      `http://${process.env.COMPILER_HOST}:8000/compile/`,
      {
        json: {
          snippets: problemBO.snippets,
          testCases: problemBO.testCases,
          language: req.problemBO.programmingLanguage,
        },
        headers: {
          'X-Request-Id': req.id,
        },
      },
    );
    logger.info(JSON.parse(body));
    res.send(body);
  } catch (error) {
    logger.error(error);
    res.send(error).sendStatus(500);
  }
}
