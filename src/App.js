import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [currentIdValue, setCurrentIdValue] = useState(1);

  const addProduct = (name) => {
    setCurrentIdValue(currentIdValue + 1);
    setProducts([...products, { id: currentIdValue, name: name }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className="main-container">
      <Header title="Product List"></Header>
      <AddProductForm addProductHandler={addProduct}></AddProductForm>
      <ProductList
        products={products}
        deleteProductHandler={deleteProduct}
      ></ProductList>
    </div>
  );
}

export default App;
