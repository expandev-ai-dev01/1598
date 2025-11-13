import { Request, Response, NextFunction } from 'express';

/**
 * @summary Custom error class for application errors
 */
export class AppError extends Error {
  constructor(public statusCode: number, public message: string, public isOperational = true) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * @summary Global error handling middleware
 * @description Catches and formats all application errors
 *
 * @param error Error object
 * @param req Express request
 * @param res Express response
 * @param next Express next function
 */
export const errorMiddleware = (
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message = error.message || 'Internal server error';

  /**
   * @rule {be-error-handling-standards} Log errors for debugging
   */
  console.error('Error:', {
    statusCode,
    message,
    stack: error.stack,
    path: req.path,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    },
    timestamp: new Date().toISOString(),
  });
};
