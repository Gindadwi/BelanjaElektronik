import prisma from "../../../../../../../lib/prisma";
export default async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({});

    return brands;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBrandById(id: string) {
  try {
    const brand = await prisma.brand.findFirst({
      where: { id: Number.parseInt(id) },
    });
    return brand;
  } catch (error) {
    console.log(error);
    return null;
  }
}
