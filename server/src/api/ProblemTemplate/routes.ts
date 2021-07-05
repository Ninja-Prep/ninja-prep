import {getChallengesList, getProblemDetails} from './controller';
import express from 'express';

const router = express.Router();

router.get('/findchallenges', getChallengesList);
router.post('/:problemPath', getProblemDetails);

export default router;
