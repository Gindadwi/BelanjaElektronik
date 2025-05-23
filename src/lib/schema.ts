import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", " image/jpeg", "image/png"];

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

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "File tidak boleh kosong",
    })
    .refine((file) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "Tipe file tidak didukung",
    }),
});
