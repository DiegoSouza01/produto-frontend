import React from "react";

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja remover este produto?")) {
      try {
        const response = await fetch(
          `http://localhost:3001/api/products/${product.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          onDelete(product.id);
        } else {
          alert("Erro ao remover produto");
        }
      } catch (error) {
        alert("Erro ao conectar com o servidor");
      }
    }
  };

  return (
    <li
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{product.name}</h3>
      <p>
        <strong>Preço:</strong> R$ {parseFloat(product.price).toFixed(2)}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>Primeira letra ausente:</strong> {product.firstMissingLetter}
      </p>
      <button onClick={handleDelete} style={{ color: "red" }}>
        Remover
      </button>
    </li>
  );
};

export default ProductItem;
