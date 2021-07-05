import {getProblemSubmissionDetails} from './middleware';
import {submitProblem} from './controller';
import express from 'express';

const router = express.Router();

router.post(
  '/execute/:problemPath',
  getProblemSubmissionDetails,
  submitProblem,
);

export default router;
