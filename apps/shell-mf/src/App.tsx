// import "./App.css";
import React, { Suspense } from "react";

const ProductApp = React.lazy(() => import("productMF/App"));

function App() {
  return (
    <>
      <h1>SHELL APP</h1>

      <Suspense fallback={<p>Loading Product Micro Frontend...</p>}>
        <ProductApp />
      </Suspense>
    </>
  );
}

export default App;
