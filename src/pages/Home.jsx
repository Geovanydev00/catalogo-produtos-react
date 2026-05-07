import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedProducts = localStorage.getItem("products");

      try {
        const parsed = savedProducts ? JSON.parse(savedProducts) : [];

        if (!parsed || parsed.length === 0) {
          setProducts([
            {
              name: "Notebook",
              price: 4500,
              description: "Notebook para trabalho",
              image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            },
            {
              name: "Celular",
              price: 2500,
              description: "Smartphone moderno",
              image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            }
          ]);
        } else {
          setProducts(parsed);
        }
      } catch (error) {
        setProducts([
          {
            name: "Notebook",
            price: 4500,
            description: "Notebook para trabalho",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          },
          {
            name: "Celular",
            price: 2500,
            description: "Smartphone moderno",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          }
        ]);
      }

      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function deleteProduct(indexToRemove) {
    const confirmDelete = window.confirm("Tem certeza que deseja remover este produto?");
    if (!confirmDelete) return;

    const updated = products.filter((_, index) => index !== indexToRemove);
    setProducts(updated);
  }

  return (
    <div className="container">
      <div className="header">
  <h1>Catálogo de Produtos</h1>
  <p>Gerencie seus produtos de forma simples e eficiente</p>
</div>

      <ProductForm onAdd={addProduct} />

      {loading ? (
        <p>Carregando produtos...</p>
      ) : products.length === 0 ? (
        <p>Nenhum produto cadastrado</p>
      ) : (
        <div className="grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image} // 👈 NOVO
              onDelete={() => deleteProduct(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}