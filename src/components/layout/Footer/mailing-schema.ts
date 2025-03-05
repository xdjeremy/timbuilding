import { z } from 'zod';

const MailingSchema = z.object({
	email: z.string().email(),
});

export { MailingSchema };