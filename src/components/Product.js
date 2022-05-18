import { Button } from "@mui/material";

function Product({ productObject, deleteProductHandler }) {
  return (
    <div className="product">
      <h3 className="product-title">{productObject.title}</h3>
      <p>Цена: {productObject.price}</p>
      <Button
        variant="contained"
        color="error"
        onClick={() => deleteProductHandler(productObject.id)}
      >
        Удалить
      </Button>
    </div>
  );
}

export default Product;
