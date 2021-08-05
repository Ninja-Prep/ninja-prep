import {Router} from 'express';
import {checkout} from './controller';

const router = Router();

router.post('/create-checkout-session', checkout);

export default router;
