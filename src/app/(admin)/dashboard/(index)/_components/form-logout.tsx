"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import { useFormState } from "react-dom";
import { error } from "console";
import { Logout } from "../lib/action";

const initialState = {
  error: "",
};

export default function FormLogout() {
  const [state, formAction] = useFormState(Logout, initialState);

  return (
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <Tooltip>
        <TooltipTrigger>
          <form action={formAction}>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors ">
              <LogOut className="h-5 w-5 text-white" />
              <span className="sr-only">Logout</span>
            </button>
          </form>
        </TooltipTrigger>
        <TooltipContent>Logout</TooltipContent>
      </Tooltip>
    </nav>
  );
}
