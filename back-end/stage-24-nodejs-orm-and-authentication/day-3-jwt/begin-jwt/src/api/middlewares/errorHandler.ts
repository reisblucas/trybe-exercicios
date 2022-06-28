import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.isJoi) {
    return res
      .status(err.status || StatusCodes.BAD_REQUEST)
      .json({ message: err.details[0].message });
  }

  console.log('err', err);

  return res
    .status(err.status || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
      message: err.message || 'Unexpected error, please try again later',
    });
};