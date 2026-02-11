import { useProducts } from "../hooks/useProducts";
import "./ProductList.css";

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading Products.......</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <ul className="product-list">
      {products!.map((p) => (
        <li key={p.id} className="product-item">
          <img src={p.thumbnail} alt={p.title} className="product-image" />

          <div className="product-info">
            <p className="product-title">{p.title}</p>
            <p className="product-price">₹{p.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
