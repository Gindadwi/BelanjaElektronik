import { redirect } from "next/navigation";
import React from "react";
import { getCategoryById } from "../../lib/data";
import FormCategory from "../../_components/form-category";

type Tparams = {
  id: string;
};

interface EditPageProp {
  params: Tparams;
}

export default async function EditPage({ params }: EditPageProp) {
  const data = await getCategoryById(params.id);

  if (!data) {
    return redirect("dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
