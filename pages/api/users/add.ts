import db from '../../../utils/db';
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.data());

    if (usersData.some(user => user.email === email)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('users').add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end(e);
  }
}