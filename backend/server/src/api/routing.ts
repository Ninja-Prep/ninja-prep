import OAuthAPI from './passport/routes';
import challengesAPI from './problemTemplate/routes';
import compilerAPI from './problemSubmission/routes';
import emailsAPI from './sendgridEmail/routes';
import express from 'express';
import stripeAPI from './stripe/routes';

export default function routingMiddleWare(app: express.Application): void {
  app.use('/api/submission', compilerAPI);
  app.use('/api/auth', OAuthAPI);
  app.use('/api/payment', stripeAPI);
  app.use('/api/challenges/', challengesAPI);
  app.use('/api/emails/', emailsAPI);
}
