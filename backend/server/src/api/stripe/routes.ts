import {Router} from 'express';
import {checkout, webhook} from './controller';

const router = Router();

router.post('/create-checkout-session', checkout);
router.post('/webhook', webhook);

export default router;
