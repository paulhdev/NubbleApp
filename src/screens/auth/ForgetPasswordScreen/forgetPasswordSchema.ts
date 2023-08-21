import {z} from 'zod';

export const forgetPasswordSchema = z.object({
  email: z.string().email('email inválido'),
});

export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
