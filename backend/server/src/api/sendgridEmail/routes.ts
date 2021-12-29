import {contactEmail} from './controller';
import express from 'express';

const router = express.Router();

router.post('/contactEmail', contactEmail);

export default router;
