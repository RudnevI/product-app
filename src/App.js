import { useEffect, useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [currentIdValue, setCurrentIdValue] = useState(1);

  const addProduct = (title) => {
    setCurrentIdValue(currentIdValue + 1);
    setProducts([...products, { id: currentIdValue, title: title }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const getProducts = async () => {
    const res = await fetch("http://localhost:1337/api/products");
    const resJson = await res.json();
    return resJson.data;
  };

  useEffect(() => {
    async function initialGetProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }
    initialGetProducts();
  }, []);

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
