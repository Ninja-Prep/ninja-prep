import {Request, Response} from 'express';

export function getAuthStatus(req: Request, res: Response): void {
  res.send(!!req.session.user);
}

export function getPublicUser(req: Request, res: Response): void {
  res.send(req.session?.publicUser);
}

export function logoutUser(req: Request, res: Response): void {
  req.logOut();
  req.session.user = null;
  req.session = null as never;
  res.redirect('/');
}

export function OAuthCallback(req: Request, res: Response): void {
  res.redirect('/challenges');
}
