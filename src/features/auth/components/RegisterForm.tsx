"use client";

import { RegisterInputs } from "../types";
import { registerSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { postRegister } from "../utils";
import { redirect } from "next/navigation";
import { toast } from "@/hooks/use-toast";

function RegisterForm() {
  const form = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(values: RegisterInputs) {
    const response = await postRegister(values);
    if (response) {
      toast({
        variant: "success",
        title: "Success",
        description: response.message,
      });
      form.reset();
      redirect("/businesses");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    placeholder="full name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    type="email"
                    placeholder="email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    type="password"
                    placeholder="password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Password Confirmation</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    type="password"
                    placeholder="confirm password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
