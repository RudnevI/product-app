import { Button, Input, InputLabel } from "@mui/material";
import { useState } from "react";

function AddProductForm({ addProductHandler }) {
  const [productName, setProductName] = useState("");

  return (
    <div className="add-product-form">
      <InputLabel htmlFor="productName">Название продукта</InputLabel>
      <Input
        variant="filled"
        id="productName"
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      ></Input>
      <Button
        variant="contained"
        color="success"
        onClick={() => addProductHandler(productName)}
      >
        Добавить
      </Button>
    </div>
  );
}

export default AddProductForm;
