import {Request, Response} from 'express';
import User from '@models/User';

export async function getUser(req: Request, res: Response): Promise<void> {
  if (req.session?.user?.userId) {
    const user = await User.findOne({userId: req.session.user.userId});
    if (user) {
      req.session.user = user;
      res.send(user);
      return;
    }
  }
  res.send();
}

export function logoutUser(req: Request, res: Response): void {
  req.logOut();
  req.session = null as never;
  res.redirect('/');
}

export function OAuthCallback(req: Request, res: Response): void {
  res.redirect('/challenges');
}
