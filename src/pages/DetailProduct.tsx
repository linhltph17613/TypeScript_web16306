import { Item } from "rc-menu";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read as readProduct } from "../api/product";
import Footer from "../component/Footer";
import NavHeader from "../component/NavHeader";
import Product from "../component/Product";
import { ICate } from "../types/cate";
import { IProduct } from "../types/product";

const DetailProduct = () => {
  const [proCate, setProCate] = useState<IProduct[]>([]);
  const { id } = useParams();
  const [products, setProduct] = useState<IProduct>();
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await readProduct(id);
      console.log(data);
      setProduct(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <header
        style={{ backgroundImage: "url('https://i.imgur.com/35J0KJ3.jpg')" }}
        className="bg-local hover:bg-fixed pt-6 pb-32  bg-cover bg-center bg-no-repeat  "
      >
        <nav className="flex justify-between">
          <div className="px-10 py-2">
            <img src="https://i.imgur.com/GZnhgQQ.png" alt="" />
          </div>
          <div className="flex">
            <NavHeader />
            <div className="px-5 mt-4">
              <i className="fa-brands fa-facebook-f px-2"></i>
              <i className="fa-brands fa-instagram px-2"></i>
              <i className="fa-brands fa-twitter px-2"></i>
            </div>
            <div className="mt-4 pr-10">
              <span className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>

                <span className="inline-flex absolute  items-center top-[-13px] right-[-20px] justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black  bg-white rounded-full">
                  9
                </span>
              </span>
            </div>
          </div>
        </nav>

        <div className="w-2/3 mx-auto pt-20 pl-12 ">
          <h3 className=" leading-tight font-serif text-7xl  py-5">
            {products?.name}
          </h3>
          <p className="text-[#b97c5e] font-medium">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </header>
      <div className="">
        <div className="grid grid-cols-2 max-w-6xl mx-auto">
          <div className="">
            <img className="w-[550px] h-[676px]" src={products?.image} alt="" />
          </div>
          <div className="">
            <h1 className="font-serif text-5xl pt-10">{products?.name}</h1>
            <p className="font-medium text-3xl text-[#B97C5E] py-3">
              $ {products?.price}
            </p>
            <p className="text-gray-500 pb-3">{products?.desc}</p>
            <form action="">
              <input
                type="number"
                className="border w-25 h-[38px] pl-3 outline-0 mr-2"
                min="1"
                placeholder="1"
                name=""
                id=""
              />
              <button
                id="AddToCart"
                className="inline-flex items-center h-10 px-5 text-white transition-colors duration-150 bg-[#B97C5E] rounded-lg focus:shadow-outline hover:bg-[#b96c4e]"
              >
                <span>Add to cart</span>
                <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </form>

            <div className="py-3 leading-7 tagss">
              <b>SKU:</b>
              <span>001</span>
              <br />
              <b>CATEGORIES:</b>
              <span>Clay, Design, New, Plaster, Vision</span>
              <br />
              <b>TAGS:</b>
              <span>Artist, Brick, Ceramics, Oval, Tactile, Wood</span>
              <br />
            </div>

            <div className="">
              <button
                className="h-10 outline-0  text-[#B97C5E] font-serif transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline text-xl  hover:bg-[#B97C5E] hover:text-white w-[570px]"
                onClick={() => setStatus(!status)}
              >
                Description
              </button>
              {status
                ? proCate.map((item, index) => (
                    <div className="px-2 py-3" key={index}>
                      {item.name} <p>Mô tả: {item.desc}</p>
                    </div>
                  ))
                : ""}
            </div>
            <div className="my-2">
              <button
                className="h-10 outline-0  text-[#B97C5E] font-serif transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline text-xl  hover:bg-[#B97C5E] hover:text-white w-[570px]"
                onClick={() => setStatus(!status)}
              >
                Aditional Infomation
              </button>
              {status
                ? proCate.map((item, index) => (
                    <div className="px-2 py-3" key={index}>
                      {item.name} <p>Mô tả: {item.desc}</p>
                    </div>
                  ))
                : ""}
            </div>
            <div className="">
              <button
                className="h-10 outline-0 text-[#B97C5E] font-serif transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline text-xl  hover:bg-[#B97C5E] hover:text-white w-[570px]"
                onClick={() => setStatus(!status)}
              >
                Review ( 0 )
              </button>
              {status
                ? proCate.map((item, index) => (
                    <div className="px-2 py-3" key={index}>
                      <h3 className="tagss">Reviews</h3>{" "}
                      <div className="">
                        {/* <Comment
                                  actions={actions}
                                  author={<a>Han Solo</a>}
                                  avatar={
                                    <Avatar
                                      src="https://joeschmoe.io/api/v1/random"
                                      alt="Han Solo"
                                    />
                                  }
                                  content={
                                    <p>
                                      We supply a series of design principles, practical
                                      patterns and high quality design resources (Sketch
                                      and Axure), to help people create their product
                                      prototypes beautifully and efficiently.
                                    </p>
                                  }
                                  datetime={
                                    <Tooltip
                                      title={moment().format("YYYY-MM-DD HH:mm:ss")}
                                    >
                                      <span>{moment().fromNow()}</span>
                                    </Tooltip>
                                  }
                                /> */}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className="pt-28">
          <h1 className="font-serif text-4xl pt-10 max-w-6xl mx-auto">
            Ceramic Products
          </h1>

          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
