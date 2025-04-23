"use client";

import { Button } from "@/components/ui/button";
import { location } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import FormDelete from "./_components/form-delete";

export const columns: ColumnDef<location>[] = [
  {
    accessorKey: "name",
    header: "location",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const location = row.original;

      return (
        <div className="space-x-4 inline-flex">
          <Button variant="default" size="sm" asChild>
            <Link href={`/dashboard/locations/edit/${location.id}`}>
              <Edit className="w-4 h-4" />
              Edit
            </Link>
          </Button>
          <FormDelete id={location.id} />
        </div>
      );
    },
  },
];
