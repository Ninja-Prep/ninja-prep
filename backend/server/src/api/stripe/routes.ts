import {Router} from 'express';
import {checkout, getCheckoutSession, webhook} from './controller';

const router = Router();

router.post('/create-checkout-session', checkout);
router.post('/checkoutSession', getCheckoutSession);
router.post('/webhook', webhook);

export default router;
