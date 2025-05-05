import React from "react";
import FormBrand from "../../_components/form-brand";
import { Tedit } from "@/types";
import { getBrandById } from "../../lib/data";
import { redirect } from "next/navigation";

type Tparams = {
  id: string;
}

export default async function Editpage({ params }: Tedit) {
  const brand = await getBrandById(params.id);

  if (!brand) {
    return redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}
