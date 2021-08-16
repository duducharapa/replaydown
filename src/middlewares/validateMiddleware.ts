import { Request, Response, NextFunction } from 'express';
import rp from 'request-promise';

const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const html = await rp(`https://replay.pokemonshowdown.com/${id}.log`);
    req.html = html;
    next();
  } catch(e) {
    console.log(e);
    res.status(400).json({
      "error": "Wrong ID match provided or this match doesn't have a replay"
    })
  }
}

export default validateMiddleware;