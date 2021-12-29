import {Request, Response} from 'express';

import {logger} from '@logger/logger';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function contactEmail(req: Request, res: Response): Promise<void> {
  const msg = {
    to: 'ninjaprep@ninjaprep.io', // Change to your recipient
    from: 'help@ninjaprep.io', // Change to your verified sender
    subject: `[Contact Us - ${req.body.sender}]  ${req.body.subject}`,
    text: req.body.emailBody,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error: Error) => {
      console.log(error);
      logger.error(error);
      res.sendStatus(400);
    });
}
