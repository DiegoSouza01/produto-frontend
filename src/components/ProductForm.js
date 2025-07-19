import React, { useState } from "react";

const ProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sku: "",
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newProduct = await response.json();
        onProductAdded(newProduct);
        setFormData({ name: "", price: "", sku: "" });
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors || [errorData.error]);
      }
    } catch (error) {
      setErrors(["Erro ao conectar com o servidor"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>

      {errors.length > 0 && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Preço:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          min="0.01"
          required
        />
      </div>

      <div>
        <label>SKU:</label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Adicionando..." : "Adicionar Produto"}
      </button>
    </form>
  );
};

export default ProductForm;
