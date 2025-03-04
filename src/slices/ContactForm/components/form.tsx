'use client';

import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@relume_io/relume-ui';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ContactFormProps } from '..';
import ContactField from './contact-field';
import { ContactSchema } from './contact-schema';

const InquiryForm: FC<ContactFormProps> = ({ slice }) => {
	const { terms_conditions } = slice.primary;

	const form = useForm<z.infer<typeof ContactSchema>>({
		resolver: zodResolver(ContactSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			terms: false,
		},
	});

	const onHCaptchaChange = (token: string) => {
		form.setValue('h-captcha-response', token);
	};

	const submitHandler: SubmitHandler<z.infer<typeof ContactSchema>> = async (
		data
	) => {
		await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(
				{
					data,
					access_key: '726e55ce-20cb-4b46-a01b-4048498227ff',
				},
				null,
				2
			),
		});
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submitHandler)}
				className='mx-auto grid w-full max-w-md grid-cols-1 gap-6'>
				<ContactField label='Name' name='name' type='text' />
				<ContactField label='Email' name='email' type='text' />
				<ContactField label='Message' name='message' type='textarea' />

				<FormField
					control={form.control}
					name='terms'
					render={({ field }) => (
						<FormItem className='flex items-center space-x-2'>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel className='mb-2 text-sm'>
								<PrismicRichText field={terms_conditions} />
							</FormLabel>
						</FormItem>
					)}
				/>
				<div className='justify-center items-center flex'>
					<HCaptcha
						sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
						reCaptchaCompat={false}
						onVerify={onHCaptchaChange}
					/>
				</div>
				<div className='text-center'>
					<Button type='submit'>Submit</Button>
				</div>
			</form>
		</Form>
	);
};

export default InquiryForm;
