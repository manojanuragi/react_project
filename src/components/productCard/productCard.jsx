import "./style.css";

function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <div>{product.title}</div>
      <div>{product.price.value}</div>
    </div>
  );
}

export default ProductCard;
