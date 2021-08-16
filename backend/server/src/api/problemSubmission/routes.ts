import {compileCode, getProblemSubmissionDetails} from './middleware';
import {submitProblem} from './controller';
import express from 'express';

const router = express.Router();

router.post('/execute/:problemPath', getProblemSubmissionDetails, compileCode, submitProblem);

export default router;
