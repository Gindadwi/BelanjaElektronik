"use server";
import { schemaSignIn } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "../../../../../../../lib/prisma";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export async function SignIn(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = schemaSignIn.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  //validasi email dan password
  if (!validate.success) {
    console.log(validate);

    return {
      error: validate.error.errors[0].message,
    };
  }

  // validasi email apakah ada di database
  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
      role: "superadmin",
    },
  });

  if (!existingUser) {
    return {
      error: "Email not found",
    };
  }

  //validasi apakah password sudah sesuai atau belum
  const comparePassword = await bcrypt.compareSync(
    validate.data.password,
    existingUser.password
  );

  if (!comparePassword) {
    return {
      error: "Email/Password is incorrect",
    };
  }

  //membuat session dan session cokie
  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard");
}
