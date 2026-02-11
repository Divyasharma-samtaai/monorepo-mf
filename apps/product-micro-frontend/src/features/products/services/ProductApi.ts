import type { Product } from "../types";

interface ProductResponse {
  products: Product[];
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: ProductResponse = await res.json();
  return data.products;
}
