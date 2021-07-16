import OAuthAPI from './Passport/routes';
import challengesAPI from './ProblemTemplate/routes';
import compilerAPI from './ProblemSubmission/routes';
import express from 'express';
import stripeAPI from './Stripe/routes';

export default function routingMiddleWare(app: express.Application): void {
  app.use('/api/submisson', compilerAPI);
  app.use('/api/auth', OAuthAPI);
  app.use('/api/payment', stripeAPI);
  app.use('/api/challenges/', challengesAPI);
}
