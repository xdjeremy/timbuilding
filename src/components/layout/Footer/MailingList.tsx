'use client';
import Button from '@/components/common/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input
} from '@relume_io/relume-ui';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { MailingSchema } from './mailing-schema';

const MailingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof MailingSchema>>({
    resolver: zodResolver(MailingSchema),
    defaultValues: {
      email: ''
    }
  });

  const submitHandler: SubmitHandler<z.infer<typeof MailingSchema>> = async ({
    email
  }) => {
    try {
      setIsLoading(true);

      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      setIsLoading(false);
      setIsSuccess(true);
      form.reset();
    } catch (error: any) {
      setIsLoading(false);
      setIsSuccess(false);
      form.setError('email', {
        message: error.message
      });
    }
  };

  return (
    <Form {...form}>
      {isSuccess && (
        <p className="text-green-700">Successfully joined the mailing list!</p>
      )}
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
      >
        <div className="relative flex size-full items-center">
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type={'text'}
                    disabled={isLoading}
                    placeholder="Enter your email"
                    className="border-border-primary bg-background-primary placeholder:text-neutral flex size-full min-h-11 border px-3 py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage className="text-red-700" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="outline" disabled={isLoading}>
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default MailingList;
