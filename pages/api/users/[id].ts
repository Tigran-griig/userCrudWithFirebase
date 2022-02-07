import db from '../../../utils/db';
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    if (typeof id === "string") {
      if (req.method === 'PUT') {
        await db.collection('users').doc(id).update({
          ...req.body,
          updated: new Date().toISOString(),
        });
      } else if (req.method === 'GET') {
        const doc = await db.collection('users').doc(id).get();
        if (!doc.exists) {
          res.status(404).end();
        } else {
          res.status(200).json(doc.data());
        }
      } else if (req.method === 'DELETE') {
        await db.collection('users').doc(id).delete();
      }
      res.status(200).end();
    }
  } catch (e) {
    res.status(400).end();
  }
}