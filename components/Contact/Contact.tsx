"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import submitContactUs from "@/actions/submit-contact-us";
import { useState } from "react";

interface ProductFormProps {
  initialData?: { name: string; email: string; message: string } | null;
}

export const Contact: React.FC<ProductFormProps> = ({ initialData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required "),
    message: z.string().min(1, "Message is required"),
  });

  type ProductFormValues = z.infer<typeof formSchema>;

  const defaultValues = initialData
    ? {
        ...initialData,
      }
    : {
        name: "",
        email: "",
        message: "",
      };
  const onSubmit = async (values: ProductFormValues) => {
    try {
      setIsLoading(true);
      const res = await submitContactUs(values);
      router.refresh();
      form.reset({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Form submitted successfully!");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-16 mt-20">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <Form {...form}>
            <form
              className="space-y-8 w-[40%]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="someone@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Submiting.." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
