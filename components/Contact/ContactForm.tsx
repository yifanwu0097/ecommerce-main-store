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
import { useRouter } from "next/navigation";
import { useState } from "react";
import submitContactUs from "@/actions/submit-contact-us";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required "),
    message: z.string().min(1, "Message is required"),
  });

  type ProductFormValues = z.infer<typeof formSchema>;

  const defaultValues = {
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
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form className="space-y-8 " onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
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
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#f7941d] mt-4 w-fit py-3 px-7 rounded self-end text-white"
            >
              {isLoading ? "Sending.." : "Send"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
