import React from "react";
import NavHeader from "../component/NavHeader";
import Product from "../component/Product";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <div className="">
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
          <h3 className=" leading-tight font-serif text-7xl  py-5">Shop</h3>
          <p className="text-[#b97c5e] font-medium">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </header>

        <div className="bg-amber-50 py-4">
      <div className=" flex justify-between items-center max-w-5xl mx-auto" >
        <div className="">
          <a className="font-medium hover:text-[#b97c5e] " href="/">Home</a>
          >
           <a  className="font-medium text-[#b97c5e] hover:text-[#b96c4e]" href="/shop"> Shop</a>
        </div>
        <div className="flex items-center">
          <div className="">
            <p>Showing a single result</p>
          </div>
          <div className="mx-5">
            <select className="shadow-md border px-3 py-2">
              <option value="Thứ tự mặc định">Sort by popularity</option>
              <option value="Thứ tự mặc định">Sort by popularity</option>
              <option value="Thứ tự mặc định">Sort by average rating</option>
              <option value="Thứ tự mặc định">Sort by newsness</option>
              <option value="Thứ tự mặc định">Order by price: low to high</option>
              <option value="Thứ tự mặc định">Order by price: high to low</option>
            </select>
          </div>
        </div>
      </div>
        </div>

          <div className="flex gap-4  max-w-6xl mx-auto mb-9">
            <div className=" py-9 w-2/3 gap-4 grid grid-cols-3">
                 <div className="relative  pt-10 overlay">
        <div className="relative  product-item  text-center">
          <div className="info-item ">
            <img
              src="https://i.imgur.com/eseUXCl.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute top-1/3 w-full ">
            <a className=" text-over" href="">
              <button className="w-full h-12 px-6 text-indigo-100  transition-colors duration-150 bg-[#b97c5e] hover:bg-[#b96c4e] rounded-lg focus:shadow-outline ">
                Add to cart
              </button>
            </a>
          </div>
          <div className="">
            <h2 className="text-2xl font-serif pb-2  pt-3">Coloful Mug</h2>
            <del className="text-gray-500">$236 </del> &ensp;
            <span className="font-medium text-xl text-[#b97c5e] font-bold">
              $123{" "}
            </span>
          </div>
        </div>

        <span className=" absolute  left-[15px] top-[8px] inline-flex items-center justify-center font-serif px-[10px] py-[25px] mr-2 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
          S&nbsp;A&nbsp;L&nbsp;E
        </span>
                  </div>
                  <div className="relative  pt-10 overlay">
        <div className="relative  product-item  text-center">
          <div className="info-item ">
            <img
              src="https://i.imgur.com/biz7PLh.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute top-1/3 w-full ">
            <a className=" text-over" href="">
              <button className="w-full h-12 px-6 text-indigo-100  transition-colors duration-150 bg-[#b97c5e] hover:bg-[#b96c4e] rounded-lg focus:shadow-outline ">
                Add to cart
              </button>
            </a>
          </div>
          <div className="">
            <h2 className="text-2xl font-serif pb-2  pt-3">Seramic Vase</h2>
            <span className="font-medium text-xl text-[#b97c5e] font-bold">
              $204{" "}
            </span>
          </div>
        </div>
                 </div>
                  <div className="relative  pt-10 overlay">
        <div className="relative  product-item  text-center">
          <div className="info-item ">
            <img
              src="https://i.imgur.com/XhsdXpQ.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute top-1/3 w-full ">
            <a className=" text-over" href="">
              <button className="w-full h-12 px-6 text-indigo-100  transition-colors duration-150 bg-[#b97c5e] hover:bg-[#b96c4e] rounded-lg focus:shadow-outline ">
                Add to cart
              </button>
            </a>
          </div>
          <div className="">
            <h2 className="text-2xl font-serif pb-2  pt-3">Sugar Bowl</h2>
            <del className="text-gray-500">$560 </del> &ensp;
            <span className="font-medium text-xl text-[#b97c5e] font-bold">
              $403{" "}
            </span>
          </div>
        </div>
        <span
          className=" absolute left-[15px] top-[8px] inline-flex items-center justify-center font-serif px-[10px] py-[25px] mr-2
            text-xs font-bold leading-none text-white bg-red-500 rounded-full"
        >
          S&nbsp;A&nbsp;L&nbsp;E
        </span>
                </div>
                <div className="relative  pt-10 overlay">
        <div className="relative  product-item  text-center">
          <div className="info-item ">
            <img
              src="https://i.imgur.com/h5Ypedh.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute top-1/3 w-full ">
            <a className=" text-over" href="">
              <button className="w-full h-12 px-6 text-indigo-100  transition-colors duration-150 bg-[#b97c5e] hover:bg-[#b96c4e] rounded-lg focus:shadow-outline ">
                Add to cart
              </button>
            </a>
          </div>
          <div className="">
            <h2 className="text-2xl font-serif pb-2  pt-3">Ceramic Plate</h2>
            <span className="font-medium text-xl text-[#b97c5e] font-bold">
              $123{" "}
            </span>
          </div>
        </div>
                 </div>
                 <div className="relative  pt-10 overlay">
        <div className="relative  product-item  text-center">
          <div className="info-item ">
            <img
              src="https://i.imgur.com/biz7PLh.jpg"
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute top-1/3 w-full ">
            <a className=" text-over" href="">
              <button className="w-full h-12 px-6 text-indigo-100  transition-colors duration-150 bg-[#b97c5e] hover:bg-[#b96c4e] rounded-lg focus:shadow-outline ">
                Add to cart
              </button>
            </a>
          </div>
          <div className="">
            <h2 className="text-2xl font-serif pb-2  pt-3">Seramic Vase</h2>
            <span className="font-medium text-xl text-[#b97c5e] font-bold">
              $204{" "}
            </span>
          </div>
        </div>
                 </div>
            </div>
            <div className="bg-gray-100 pl-5 left-0  ml-4 py-9 w-1/3">
              <div className="">
                <h1 className="font-serif text-2xl">Filter by price</h1>
                <input type="range" className="w-[250px] bg-[#88B44E] mb-4"  />
                <h3 className=" font-sans  "> PRICE: $102 -$400</h3>
                <button
                  className="buttun ] font-serif text-xl mt-3 text-white  px-14 py-4  bg-[#b97c5e]">Filter</button>
               </div>
               <div className="left-0 pt-5">
                <h1 className="font-serif text-2xl pb-2">Latest products</h1>
                <div className="flex gap-2 relative py-3">
                  <img width={"70px"} src="https://i.imgur.com/eseUXCl.jpg" alt="" />
                  <div className="">
                    <p className="font-serif font-medium">Coloful Mug</p>
                  <span className=" absolute font-medium left-[80px] text-sm hover:text-[#b97c5e] text-gray-400 font-bold">
                      $123</span>
                  </div>
                  
                </div>
                 <div className="flex gap-2 relative py-3">
                  <img width={"70px"} src="https://i.imgur.com/biz7PLh.jpg" alt="" />
                  <div className="">
                    <p className="font-serif font-medium">Coloful Mug</p>
                  <span className=" absolute font-medium left-[80px] text-sm hover:text-[#b97c5e] text-gray-400 font-bold">
                      $123</span>
                  </div>
                  
                </div>
                 <div className="flex gap-2 relative py-3">
                  <img width={"70px"} src="https://i.imgur.com/h5Ypedh.jpg" alt="" />
                  <div className="">
                    <p className="font-serif font-medium">Coloful Mug</p>
                  <span className=" absolute font-medium left-[80px] text-sm hover:text-[#b97c5e] text-gray-400 font-bold">
                      $123</span>
                  </div>
                  
                </div>
               </div>
                <div className=""> 
                <h1 className="font-serif text-2xl pt-5">Categories</h1>
                <ul className="">
                  <li><a className="py-2 text-[#b97c5e] hover:text-[#b96c4e] font-medium" href="">Clay</a></li>
                  <li><a className="py-2 text-[#b97c5e] hover:text-[#b96c4e] font-medium" href="">Design</a></li>
                  <li><a className="py-2 text-[#b97c5e] hover:text-[#b96c4e] font-medium" href="">New</a></li>
                  <li><a className="py-2 text-[#b97c5e] hover:text-[#b96c4e] font-medium" href="">Plaster</a></li>
                  <li><a className="py-2 text-[#b97c5e] hover:text-[#b96c4e] font-medium" href="">Vision</a></li>
                </ul>
               </div>
            </div>
          </div>

      
        </div>


    
  );
};

export default ProductPage;
