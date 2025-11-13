import { z } from 'zod';

/**
 * @summary Common Zod validation utilities
 * @description Reusable validation schemas for consistent data validation
 */

/**
 * @rule {be-validation-patterns} Standard validation utilities
 */
export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

export const zName = z.string().min(1).max(200);
export const zNullableDescription = z.string().max(500).nullable();

export const zFK = z.number().int().positive();
export const zNullableFK = z.number().int().positive().nullable();

export const zBit = z.number().int().min(0).max(1);

export const zDateString = z.string().datetime();
export const zDate = z.coerce.date();

export const zEmail = z.string().email();

export const zNumeric = z.number();
export const zNullableNumeric = z.number().nullable();

export const zDecimal = (precision: number = 15, scale: number = 2) => {
  return z.number();
};

export const zPrice = z.number();

export const zPercentage = z.number().min(0).max(100);
