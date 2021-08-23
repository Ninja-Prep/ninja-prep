import {IUserDocument} from '@models/User';
import {NextFunction, Request, Response} from 'express';
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

export function setUserCookie(req: Request, res: Response, next: NextFunction): void {
  req.session.user = req.user as IUserDocument;
  next();
}
