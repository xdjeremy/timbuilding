import MailerLite from '@mailerlite/mailerlite-nodejs';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
	try {
		// Parse the JSON body of the request
		const data = await req.json();
		const email = data.email;

		if (!email) {
			return new Response(JSON.stringify({ error: 'Email is required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		const mailerlite = new MailerLite({
			api_key: process.env.MAILERLITE_API_KEY || '',
		});

		// create new subscriber
		await mailerlite.subscribers.createOrUpdate({
			email,
		});

		return new Response(
			JSON.stringify({ message: 'Subscribed successfully' }),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
