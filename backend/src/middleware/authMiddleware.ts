import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorMiddleware';

/**
 * @summary Authentication middleware
 * @description Validates user authentication and authorization
 *
 * @remarks Simplified authentication without JWT implementation
 * @rule {be-security-patterns} Authentication will be enhanced in future iterations
 *
 * @param req Express request
 * @param res Express response
 * @param next Express next function
 */
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /**
     * @validation Check for authentication token
     * @remarks Placeholder for future authentication implementation
     */
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError(401, 'Authentication required');
    }

    /**
     * @rule {be-multi-tenancy-support} Set account context for multi-tenancy
     * @remarks This will be properly implemented with authentication system
     */
    (req as any).user = {
      idAccount: 1,
      idUser: 1,
    };

    next();
  } catch (error) {
    next(error);
  }
};
