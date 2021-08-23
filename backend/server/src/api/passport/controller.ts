import {Request, Response} from 'express';

export function getUser(req: Request, res: Response): void {
  res.send(req.session?.user);
}

export function logoutUser(req: Request, res: Response): void {
  req.logOut();
  req.session = null as never;
  res.redirect('/');
}

export function OAuthCallback(req: Request, res: Response): void {
  res.redirect('/challenges');
}
