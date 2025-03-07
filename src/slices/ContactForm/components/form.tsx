'use client';

import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@relume_io/relume-ui';
import { CheckCheckIcon, MailWarning } from 'lucide-react';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ContactFormProps } from '..';
import ContactField from './contact-field';
import { ContactSchema } from './contact-schema';

const InquiryForm: FC<ContactFormProps> = ({ slice }) => {
  const { terms_conditions } = slice.primary;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      terms: false
    }
  });

  const onHCaptchaChange = (token: string) => {
    form.setValue('h-captcha-response', token);
  };

  const submitHandler: SubmitHandler<z.infer<typeof ContactSchema>> = async (
    data
  ) => {
    setIsLoading(true);

    const req = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        {
          ...data,
          from_name: data.name,
          access_key: '726e55ce-20cb-4b46-a01b-4048498227ff'
        },
        null,
        2
      )
    });

    const res = await req.json();

    if (res.success) {
      form.reset();
      setIsSuccess(true);
    } else {
      setErrorMessage(res.message || 'Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="mx-auto grid w-full max-w-md grid-cols-1 gap-6"
      >
        {(isSuccess || errorMessage) && (
          <Alert variant={isSuccess ? 'default' : 'destructive'}>
            {isSuccess ? (
              <CheckCheckIcon className="h-4 w-4" />
            ) : (
              <MailWarning className="h-4 w-4" />
            )}
            <AlertTitle>
              {isSuccess
                ? 'Your inquiry has been successfully submitted!'
                : errorMessage}
            </AlertTitle>
            <AlertDescription>
              {isSuccess &&
                'Thank you for your message. We&apos;ll review your inquiry and respond via email shortly.'}
            </AlertDescription>
          </Alert>
        )}
        <ContactField
          label="Name"
          name="name"
          type="text"
          disabled={isLoading}
        />
        <ContactField
          label="Email"
          name="email"
          type="text"
          disabled={isLoading}
        />
        <ContactField
          label="Message"
          name="message"
          type="textarea"
          disabled={isLoading}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormLabel className="text-sm">
                  <PrismicRichText field={terms_conditions} />
                </FormLabel>
              </div>
              <FormMessage className="text-red-700" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange}
          />
        </div>
        <div className="text-center">
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default InquiryForm;
