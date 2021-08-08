import {
  getChallengesList,
  getProblemDetails,
  getStarterCode,
} from './controller';
import express from 'express';

const router = express.Router();

router.get('/getChallenges', getChallengesList);
router.post('/:problemPath', getProblemDetails);
router.post('/:problemPath/getStarterCode', getStarterCode);

export default router;
