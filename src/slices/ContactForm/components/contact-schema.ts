import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(999, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(99999, 'Message is too long'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions'
  }),
  'h-captcha-response': z.string()
});
