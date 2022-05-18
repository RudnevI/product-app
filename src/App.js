import { useEffect, useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const productsUrl = `http://localhost:1337/api/products`;
  const categoriesUrl = `http://localhost:1337/api/categories`;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentIdValue, setCurrentIdValue] = useState(1);

  const addProduct = async (title, price, categoryId) => {
    const result = await fetch(`${productsUrl}/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          title: title,
          price: price,
          categoryId: categoryId,
        },
      }),
    });

    if (result.ok) {
      setCurrentIdValue(currentIdValue + 1);
      setProducts([
        ...products,
        { id: currentIdValue, title: title, price: price },
      ]);
    } else {
      alert("Something went wrong: creation failed");
    }
  };

  const deleteProduct = async (id) => {
    const result = await fetch(`${productsUrl}/${id}`, { method: "DELETE" });
    if (result.ok) {
      setProducts(products.filter((product) => product.id !== id));
    } else {
      alert("Something went wrong: deletion failed");
    }
  };

  const getProducts = async () => {
    const res = await fetch(productsUrl);
    const resJson = await res.json();
    return resJson.data;
  };

  const getCategories = async () => {
    const res = await fetch(categoriesUrl);
    const resJson = await res.json();
    console.log(resJson);
    return resJson.data;
  };

  useEffect(() => {
    async function initialGetProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    }
    initialGetProducts();
  }, []);

  return (
    <div className="main-container">
      <Header title="Product List"></Header>
      <AddProductForm
        addProductHandler={addProduct}
        categories={categories}
      ></AddProductForm>
      <ProductList
        products={products}
        deleteProductHandler={deleteProduct}
      ></ProductList>
    </div>
  );
}

export default App;
