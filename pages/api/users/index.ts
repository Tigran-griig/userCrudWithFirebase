import db from '../../../utils/db';
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await db.collection('users').get();
    const usersData = users.docs.map(user => user.data());
    res.status(200).send({ ...usersData });
  } catch (e) {
    res.status(400).end(e);
  }
}