import {compileCode, getProblemSubmissionDetails} from './middleware';
import {getSolutions, getSubmissionRecord, submitProblem} from './controller';
import {validateUser} from '../commonMiddleware/commonMiddleware';
import express from 'express';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 3,
  message: 'Please wait before submitting your code',
});

router.post('/execute/:problemPath', validateUser, limiter, getProblemSubmissionDetails, compileCode, submitProblem);
router.get('/submissionRecords/:problemPath', getSubmissionRecord);
router.get('/solutions/:problemPath', getSolutions);

export default router;
