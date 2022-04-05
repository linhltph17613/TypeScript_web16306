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
import PrivateRouter from "./component/PrivateRouter";
import ProductPage from "./pages/Product";
import AboutPage from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CategoriesManager from "./pages/layouts/CategoriesManager";
import { ICate } from "./types/cate";
import { IUser } from "./types/User";
import UserManager from "./pages/layouts/UserManager";
import { list as listUser } from "./api/user";
import { list as listCate } from "./api/cate";
import ProductEdit from "./pages/ProductEdit";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICate[]>([]);
  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      console.log(data);
      setUser(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getCate = async () => {
      const { data } = await listCate();
      console.log(data);
      setCategory(data);
    };
    getCate();
  }, []);

  const removeItem = (id: number) => {
    //call api
    remove(id);

    //rerender
    setProducts(products.filter((item) => item._id !== id));
  };
  const removeCate = (id: number) => {
    //call api
    remove(id);

    //rerender
    setCategory(category.filter((cate) => cate._id !== id));
  };
  const removeUser = (id: number) => {
    //call api
    remove(id);

    //rerender
    setUser(user.filter((item) => item._id !== id));
  };

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  const HandleronEdit = async (id, product: IProduct) => {
    const { data } = await update(id, product);
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
          {/* <li>
            <NavLink to="/">Home Page</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products">
              <Route index element={<ProductPage />}></Route>
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Signin />} />
            <Route path="register" element={<Signup />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="cart/checkout" element={<Checkout />} />
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
              <Route
                path="edit/:id"
                element={<ProductEdit onEdit={HandleronEdit} />}
              />

              <Route />
            </Route>
            <Route path="category">
              <Route
                index
                element={
                  <PrivateRouter>
                    <CategoriesManager
                      category={category}
                      onRemove={removeCate}
                    />
                  </PrivateRouter>
                }
              />

              <Route />
            </Route>
            <Route path="user">
              <Route
                index
                element={
                  <PrivateRouter>
                    <UserManager user={user} onRemove={removeUser} />
                  </PrivateRouter>
                }
              />

              <Route />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
