import express, { Request, Response, NextFunction } from 'express';
import HttpException from '../shared/http.exception';

const httpErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { _status, message } = err as HttpException;

  res.status(_status || 500).json(message || 'Internal error')
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
};

export default errorHandler;
