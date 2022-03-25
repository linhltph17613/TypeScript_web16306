import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import type { IProduct } from "./types/product";
import ShowInfo from "./component/Showinfo";
import axios from "axios";
import Product from "./component/Product";
import { add, list, remove } from "./api/product";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import Dashboard from "./pages/Dashboard";
import ProductManager from "./pages/layouts/ProductManager";
import HomePage from "./pages/Home";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductAdd from "./pages/ProductAdd";
import PrivateRouter from "./component/PrivateRouter";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  const removeItem = (id: number) => {
    //call api
    remove(id);

    //rerender
    setProducts(products.filter((item) => item._id !== id));
  };

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  return (
    <div className="App">
      {/* {product.map((item) => {
        return (
          <div>
            {item.name}{" "}
            <button onClick={() => removeItem(item._id)}>Remove</button>
          </div>
        );
      })} */}

      <header>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<h1>Hiển thị sản phẩm</h1>} />
            <Route path="about" element={<h1>About Page</h1>} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route
                index
                element={
                  <PrivateRouter>
                    <ProductManager products={products} onRemove={removeItem} />
                  </PrivateRouter>
                }
              />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />

              <Route />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
