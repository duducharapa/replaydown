import { Request, Response } from 'express';
import { playerResolver } from '../resolvers';

const playerController = async (req: Request, res: Response) => {
  const data = playerResolver(req.data);
  res.status(200).json(data);
}

export default playerController;