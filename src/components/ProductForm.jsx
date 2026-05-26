import { useState } from "react";
import produtoImg from "../assets/produto.webp";

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
      image: produtoImg,
    });

    setName("");
    setPrice("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Adicionar Produto</h2>

      <label htmlFor="name">
        Nome do produto
      </label>

      <input
        id="name"
        type="text"
        placeholder="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="price">
        Preço
      </label>

      <input
        id="price"
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="description">
        Descrição do produto
      </label>

      <textarea
        id="description"
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