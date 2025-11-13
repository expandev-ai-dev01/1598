/**
 * @summary Response helper functions
 * @description Standardized response formatting utilities
 */

/**
 * @summary Success response interface
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary Error response interface
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string | number;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary Creates a standardized success response
 * @rule {be-success-response-format} Standard success response format
 *
 * @param data Response data
 * @param metadata Optional metadata
 * @returns Formatted success response
 */
export const successResponse = <T>(
  data: T,
  metadata?: Partial<SuccessResponse<T>['metadata']>
): SuccessResponse<T> => {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
};

/**
 * @summary Creates a standardized error response
 * @rule {be-error-response-format} Standard error response format
 *
 * @param message Error message
 * @param code Error code
 * @param details Optional error details
 * @returns Formatted error response
 */
export const errorResponse = (
  message: string,
  code: string | number = 'ERROR',
  details?: any
): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
};
