import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onProductDeleted }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onDelete={onProductDeleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
