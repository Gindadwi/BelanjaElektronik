import { z } from "zod";

export const schemaSignIn = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters long" }),
});

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name shoy id have min 4 characters" }),
});
