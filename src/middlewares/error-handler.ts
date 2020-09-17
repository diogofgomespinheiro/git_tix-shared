import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/CustomError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.json({ message: 'Something went wrong' });
};
