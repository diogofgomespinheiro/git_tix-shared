import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/CustomError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    console.error(err);
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(400).json({ message: 'Something went wrong' });
};
