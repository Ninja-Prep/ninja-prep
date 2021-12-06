import {compileCode, getProblemSubmissionDetails} from './middleware';
import {getSubmissionRecord, submitProblem, getSolutions} from './controller';
import express from 'express';

const router = express.Router();

router.post('/execute/:problemPath', getProblemSubmissionDetails, compileCode, submitProblem);
router.get('/submissionRecords/:problemPath', getSubmissionRecord);
router.get('/solutions/:problemPath', getSolutions);

export default router;
