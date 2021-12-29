import axios, {AxiosResponse} from 'axios';

/**
 * @returns Sends contact email for bugs and other issues
 */
export async function postContactEmail(sender: string, subject: string, emailBody: string): Promise<AxiosResponse> {
  const emailResponse = await axios({
    method: 'post',
    url: `/api/emails/contactEmail`,
    data: {
      sender: sender,
      emailBody: emailBody,
      subject: subject,
    },
  });

  return emailResponse;
}
