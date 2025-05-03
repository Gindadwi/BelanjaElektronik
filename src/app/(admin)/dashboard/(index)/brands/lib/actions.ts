"use server";

import { schemaBrand } from "@/lib/schema";
import { uploadFile } from "@/lib/supabase";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { unknown } from "zod";
import prisma from "../../../../../../../lib/prisma";

export async function postBrand(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = schemaBrand.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  try {
    const filename = await uploadFile(validate.data.image, "brands");

    await prisma.brand.create({
      data: {
        name: validate.data.name,
        logo: filename,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Error creating brand",
    };
  }

  return redirect("/dashboard/brands");
}
