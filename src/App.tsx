import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import type { IProduct } from "./types/product";
import ShowInfo from "./component/Showinfo";
import axios from "axios";
import Product from "./component/Product";
import { add, list, remove, update } from "./api/product";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import Dashboard from "./pages/Dashboard";
import ProductManager from "./pages/layouts/ProductManager";
import HomePage from "./pages/Home";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/productEdit";
import PrivateRouter from "./component/PrivateRouter";
import Signin from "./pages/Signin";
import Signup from "./pages/Singup";

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
    setProducts(products.filter((item) => item.id !== id));
  };

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };

  const onHandleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map((item) => (item.id == data.id ? data : item)));
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
          <li>
            <NavLink to="/signin">Signin</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<h1>Hiển thị sản phẩm</h1>} />
            <Route path="about" element={<h1>About Page</h1>} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
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
              <Route
                path=":id/edit"
                element={<ProductEdit onUpdate={onHandleUpdate} />}
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
