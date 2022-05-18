function Product({ productObject, deleteProductHandler }) {
  return (
    <div className="product">
      <h3 className="product-title">{productObject.name}</h3>
      <button onClick={() => deleteProductHandler(productObject.id)}>
        Удалить
      </button>
    </div>
  );
}

export default Product;
