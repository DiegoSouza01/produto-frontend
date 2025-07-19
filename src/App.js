import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar produtos ao inicializar
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) =>
      [...prevProducts, newProduct].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const handleProductDeleted = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Gerenciamento de Produtos</h1>
      </header>
      <main style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          <ProductForm onProductAdded={handleProductAdded} />
        </div>
        <div style={{ flex: 2 }}>
          <ProductList
            products={products}
            onProductDeleted={handleProductDeleted}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
