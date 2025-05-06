import prisma from "../../../../../../../lib/prisma";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        _count: {
          select: {
            orders: true,
          },
        },
        name: true,
        createdAt: true,
        price: true,
        stock: true,
        category: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        image: true,
      },
    });

    const response_products = products.map((product) => ({
      brand_name: product.brand.name,
      category_name: product.category.name,
      createdAt: product.createdAt,
      image_url: product.image,
      id: product.id,
      name: product.name,
      price: Number(product.price),
      stock: product.stock,
      total_sales: product._count.orders,
    }));

    return response_products;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}
