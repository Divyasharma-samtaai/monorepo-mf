import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/ProductApi";
import type { Product } from "../types";

export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 60 * 1000,
  });
}
