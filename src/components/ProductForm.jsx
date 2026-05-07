import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price || !description) {
      alert("Preencha todos os campos");
      return;
    }

    onAdd({
      name,
      price,
      description,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    });

    setName("");
    setPrice("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Adicionar Produto</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <textarea
        placeholder="Descrição do produto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">
        Adicionar Produto
      </button>
    </form>
  );
}