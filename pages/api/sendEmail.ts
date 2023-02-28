import { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = (request: NextApiRequest, response: NextApiResponse) => {
  /**
   * 1. retrieve POST request,
   * 2. extract POST Body
   * 3. check tyoes, try to send email
   * 4. if everything goes well, send 200 response
   */
  response.status(200).json({ message: 'everything went well!!!!' });
};

export default sendEmail;
