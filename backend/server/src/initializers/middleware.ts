import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import express from 'express';
import expressLogger from 'utils/logging/logger';
import httpContext from 'express-http-context';
import passport from 'passport';
import reqId from 'express-request-id';
import routingMiddleWare from '../api/routing';

export default function (app: express.Application): void {
  app.use(express.json());
  app.use(cookieParser('mySecret'));
  app.use(
    cors({
      methods: ['get', 'post'],
    }),
  );
  app.use(
    cookieSession({
      name: 'session',
      keys: ['keyboard cat'],
      secure: false,
      httpOnly: false,
      sameSite: 'lax',
      // Cookie Options
      maxAge: 5 * 60 * 1000,
    }),
  );
  app.use(reqId());
  app.use(httpContext.middleware);
  app.use((req, res, next) => {
    httpContext.set('reqId', req.id);
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
  expressLogger(app);
  routingMiddleWare(app);
}
