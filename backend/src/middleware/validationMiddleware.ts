import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { AppError } from './errorMiddleware';

/**
 * @summary Request validation middleware factory
 * @description Creates middleware to validate request data against Zod schema
 *
 * @param schema Zod schema for validation
 * @param source Request property to validate (body, params, query)
 * @returns Express middleware function
 */
export const validationMiddleware = (
  schema: ZodSchema,
  source: 'body' | 'params' | 'query' = 'body'
) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      /**
       * @validation Validate request data against schema
       */
      req[source] = await schema.parseAsync(req[source]);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));

        res.status(400).json({
          success: false,
          error: {
            code: 400,
            message: 'Validation failed',
            details: validationErrors,
          },
          timestamp: new Date().toISOString(),
        });
      } else {
        next(new AppError(500, 'Validation error'));
      }
    }
  };
};
