import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { columns } from "./column";
import { get } from "http";
// import { getCatgories } from "./lib/data";
import Link from "next/link";

export default function BrandPage() {
  return (
    <div>
      {" "}
      <div className="space-y-4">
        <div className="text-right">
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href={"/dashboard/brands/create"}>
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Location
              </span>
            </Link>
          </Button>
        </div>

        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Locations</CardTitle>
            <CardDescription>
              Manage your Locations and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={[]} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
