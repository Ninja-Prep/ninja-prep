import {compileCode, getProblemSubmissionDetails} from './middleware';
import {getSubmissionRecord, submitProblem} from './controller';
import express from 'express';

const router = express.Router();

router.post('/execute/:problemPath', getProblemSubmissionDetails, compileCode, submitProblem);
router.get('/submissionRecords/:problemPath', getSubmissionRecord);

export default router;
