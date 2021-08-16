import { Request, Response, NextFunction } from 'express';

const parseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: string[] = req.html
      .match(/(.*(?!\|))\n/g)
      .filter((slice: string) => slice !== '|\n')
      .map((slice: string) => slice.replace(/\n/g, ''));

    req.data = data;
    next();
  } catch(e) {
    res.status(500).json({
      "error": "Match not found"
    });
  }
}

export default parseMiddleware;