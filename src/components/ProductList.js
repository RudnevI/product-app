import Product from "./Product";

function ProductList({ products, deleteProductHandler }) {
  return (
    <div className="productList">
      {products.map((product) => (
        <Product
          key={product.id}
          productObject={product}
          deleteProductHandler={deleteProductHandler}
        ></Product>
      ))}
    </div>
  );
}

export default ProductList;
