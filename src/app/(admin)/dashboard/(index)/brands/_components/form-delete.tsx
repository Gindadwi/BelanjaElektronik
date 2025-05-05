"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";
import { unknown } from "zod";
import { deleteBrand } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { ActionResult } from "@/types";

const initialState: ActionResult = {
  error: "",
};

interface FormDeleteProps {
  id: number;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="destructive" size="sm" disabled={pending}>
      <Trash className="w-4 h-4" /> {pending ? "Loading..." : "Delete"}
    </Button>
  );
}

export default function FormDelete({ id }: FormDeleteProps) {
  const deleteBrandWithId = (_: unknown, formData: FormData) =>
    deleteBrand(_, formData, id);

  const [state, formAction] = useFormState(deleteBrandWithId, initialState);

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
}
