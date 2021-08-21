import {NextFunction, Request, Response} from 'express';
import _ from 'lodash';
import passport from 'passport';

export function googleOauth(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate('google', {
    failureRedirect: '/',
  })(req, res, next);
}

export function facebookOauth(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate('facebook', {
    failureRedirect: '/',
  })(req, res, next);
}
export function githubOauth(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate('github', {
    failureRedirect: '/',
  })(req, res, next);
}

const publicUserFields = ['firstName', '_id', 'profilePicture'];

export function setUserCookie(req: Request, res: Response, next: NextFunction): void {
  const publicUser = _.pick(req.user, publicUserFields);
  req.session.publicUser = publicUser;
  req.session.user = req.user;
  req.session.isAuthenticated = true;
  next();
}
