export default function ProductCard({ name, price, description, image, onDelete }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />

      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>R$ {price}</strong>

        <button className="delete-btn" onClick={onDelete}>
          Remover
        </button>
      </div>
    </div>
  );
}