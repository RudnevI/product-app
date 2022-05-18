import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { useState } from "react";

function AddProductForm({ addProductHandler, categories }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(1);

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
      <InputLabel htmlFor="price">Цена: {productPrice}</InputLabel>
      <Slider
        id="price"
        defaultValue={30}
        min={0}
        max={100000}
        step={1}
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      ></Slider>
      <Select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.title}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        color="success"
        onClick={() => addProductHandler(productName, productPrice, categoryId)}
      >
        Добавить
      </Button>
    </div>
  );
}

export default AddProductForm;
