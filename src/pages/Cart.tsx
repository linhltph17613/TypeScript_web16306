import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../api/cate";
import { list } from "../api/user";
import { ICate } from "../types/cate";
import { IProduct } from "../types/product";

type CatePropsType = {
  category: ICate[];
};

const CartPage = (props: CatePropsType) => {
  const [proCate, setProCate] = useState<IProduct[]>([]);
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  return (
    <>
      <div className="">
        <div className=" max-w-6xl mx-auto pb-42">
          <table className=" border table table-hover">
            <thead>
              <tr>
                <th className="border-r py-2">Remove</th>
                <th className="py-2">Image</th>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Amount</th>
                <th className="py-2">QUANTITY</th>
                <th className="py-2"> TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                <tr>
                  <td className="border px-6 text-center py-4">X</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img width="80" src={`${item.image}`} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    $ {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    16cm x 18cm x 5cm
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* <button
                    onClick={() => setCount(count - 1)}
                    data-id="${item.id}"
                    className="bg-[#b97c5e] text-white btn btn-decrease mr-2 px-2"
                  >
                    -
                  </button> */}
                    <input
                      type="number"
                      value={`${item.quantity}`}
                      className="border border-gray-500 w-16 px-2"
                    />
                    {/* <button
                    onClick={() => setCount(count + 1)}
                    data-id="${item.id}"
                    className="bg-[#b97c5e] text-white btn btn-increase ml-2 px-2"
                  >
                    +
                  </button> */}
                  </td>
                  <td>$ {item.total}</td>
                </tr>;
              })}
            </tbody>
          </table>

          <div className="mt-14 grid grid-cols-2">
            <div className="relative text-gray-700">
              <input
                className="w-3xl pl-3 pr-8 py-3 outline-0 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="absolute font-serif inset-y-0 left-[180px] flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
                Apply Coupon
              </button>
            </div>
            <div className="flex gap-3">
              <a href="/">
                <button
                  className="px-5 text-white font-serif  py-3 bg-[#b97c5e] mx-2"
                  type="submit"
                >
                  Continue Shopping
                </button>
              </a>
              <a href="/cart/checkout">
                <button
                  className="px-5 text-white  font-serif py-3 bg-[#b97c5e] mx-2"
                  type="submit"
                >
                  Proceed To Checkout
                </button>
              </a>
            </div>
          </div>
          <div className="ml-[770px] pt-5  font-serif">
            <h1 className=" text-2xl">Cart totals</h1>
            <span className=" pt-5 text-xl">Subtotal: </span>{" "}
            <span className="text-[#b97c5e] text-lg">$103.00</span>
            <br />
            <span className="font-serif text-xl">Total: </span>{" "}
            <span className="text-2xl text-red-700 font-medium">$103.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
