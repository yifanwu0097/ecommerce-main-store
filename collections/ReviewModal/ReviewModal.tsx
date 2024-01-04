'use client';

import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Modal } from '@/components/ui/modal';
import { useModal } from '@/hooks/use-modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { Textarea } from '@/components/ui/textarea';
import { Rate } from 'antd';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(1),
  reviewStars: z.number(),
  reviewBody: z.string().min(5),
});

export const ReviewModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  const modal = useModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      reviewStars: 5,
      reviewBody: '',
    },
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSubmit = () => {
    ('');
  };

  return (
    <Modal
      title='Add Review'
      description='Add your review for the product'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <Rate />
              </div>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Your Name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name='reviewBody'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Body</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder='Enter your review'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                <Button
                  disabled={loading}
                  variant={'outline'}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type='submit'>
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
