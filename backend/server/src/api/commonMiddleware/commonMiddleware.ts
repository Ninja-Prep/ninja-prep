import {NextFunction, Request, Response} from 'express';

export function validateUser(request: Request, response: Response, next: NextFunction): void {
  if (!request.session?.user) {
    response.sendStatus(400);
  } else {
    next();
  }
}
