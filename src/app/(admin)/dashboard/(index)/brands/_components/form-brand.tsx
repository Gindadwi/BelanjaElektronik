"use client"; // jika kamu pakai Next.js App Router dan komponen ini butuh client-side behavior

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ActionResult } from "@/types";
import { Label } from "@radix-ui/react-label";
import { AlertCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { postBrand, updateBrand } from "../lib/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Brand } from "@prisma/client";
const initialState: ActionResult = {
  error: "",
};

interface FormBrandProps {
  type?: "ADD" | "EDIT";
  data?: Brand;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm">
      {pending ? "Loading..." : "Save Brand"}
    </Button>
  );
}

export default function FormBrand({ data, type }: FormBrandProps) {
  const updateWithId = (_: unknown, formData: FormData) =>
    updateBrand(_, formData, data?.id ?? 0);

  const [state, formAction] = useFormState(
    type === "ADD" ? postBrand : updateWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" asChild>
              <Link href="/dashboard/brands">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Brand Controller
            </h1>

            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <SubmitButton />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card className="w-[500px]">
                <CardHeader>
                  <CardTitle>Brand Details</CardTitle>
                  <CardDescription>
                    Lipsum dolor sit amet, consectetur adipiscing elit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {state.error !== "" && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state.error}</AlertDescription>
                      </Alert>
                    )}
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full"
                        defaultValue={data?.name}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="logo">Logo</Label>
                      <Input
                        id="logo"
                        name="image"
                        type="file"
                        className="w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Brand</Button>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}
