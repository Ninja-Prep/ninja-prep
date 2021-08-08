import {
  getChallengesList,
  getProblemDetails,
  getProblemStarterCode,
} from './controller';
import express from 'express';

const router = express.Router();

router.get('/getchallenges', getChallengesList);
router.post('/:problemPath', getProblemDetails);
router.post('/:problemPath/getstartercode', getProblemStarterCode);

export default router;
