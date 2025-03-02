"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="space-x-4">
          <Button size="sm" className="w-4 h-4">
            <Edit />
            Edit
          </Button>
          <Button size="sm" className="w-4 h-4">
            <Trash />
            Delete
          </Button>
        </div>
      );
    },
  },
];
