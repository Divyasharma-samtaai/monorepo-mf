import "./App.css";
import ProductList from "./features/products/components/ProductList";
import Providers from "./features/products/components/Providers";

function AppContent() {
  return (
    <>
      <h1>PRODUCTS</h1>
      <ProductList />
    </>
  );
}

export default function App() {
  return (
    <Providers>
      <AppContent />
    </Providers>
  );
}
