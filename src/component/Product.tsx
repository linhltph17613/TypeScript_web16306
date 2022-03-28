import React from "react";

type ProductProps = {
  // data: {
  //   id: number;
  //   name: string;
  // };
};

// const Product = ({ data: { id, name } }: ProductProps) => {
const Product = (props: ProductProps) => {
  return (
    <div className="">
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
    </div>
  );
};
export default Product;
