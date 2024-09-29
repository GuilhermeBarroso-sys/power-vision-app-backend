import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price: z.number().positive('Price must be positive'),
  quantity: z.number().int().nonnegative('Quantity must be non-negative'),
  userId: z.string().uuid(),
});

export const updateProductSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  description: z.string().optional(),
  price: z.number().positive('Price must be positive').optional(),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be non-negative')
    .optional(),
});
