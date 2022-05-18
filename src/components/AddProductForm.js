import { useState } from "react";

function AddProductForm({ addProductHandler }) {
  const [productName, setProductName] = useState("");

  return (
    <div className="add-product-form">
      <label htmlFor="productName">Название продукта</label>
      <input
        id="productName"
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      ></input>
      <button onClick={() => addProductHandler(productName)}>Добавить</button>
    </div>
  );
}

export default AddProductForm;
