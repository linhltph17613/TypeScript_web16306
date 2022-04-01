import React from "react";
import Product from "../component/Product";
import NavHeader from "../component/NavHeader";
import Footer from "../component/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className=" ">
      <header className=" bg-local hover:bg-fixed pt-6 pb-[200px] bg-header-img bg-cover bg-center bg-no-repeat  ">
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
          <img
            className="w-[72px] h-[72px]"
            src="https://i.imgur.com/ygy2JGo.png"
            alt=""
          />
          <h3 className=" leading-tight font-serif text-7xl text-white py-5">
            Exclusive Ceramics <br /> & Pottery Retailer
          </h3>
          <p className="text-white font-medium">
            WE MAKE UNIQUE THINGS WITH LOVE AND PASSION
          </p>
        </div>
      </header>
      <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6 py-36">
        <div className="text-center">
          <img
            className="inline pb-3"
            src="https://i.imgur.com/1fHCi33.png"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Pottery classNamees
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#B97C5E] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3"
            src="https://i.imgur.com/OhjHEQl.png"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Design Proces
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3"
            src="https://i.imgur.com/NQ4erhe.png"
            alt=""
          />
          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Gift Cards
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
        <div className="text-center">
          <img
            className="inline pb-3"
            src="https://i.imgur.com/jcEn1nl.png"
            alt=""
          />

          <h3 className="text-2xl font-medium hover:text-[#b97c5e]">
            Pottery Weel
          </h3>
          <p className="text-gray-600 pt-3">
            Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
            vocent impetus usu. Eos hinc senserit et.
          </p>
          <p className="text-[#b97c5e] font-medium text-sm pt-[20px]">
            VIEW ALL <i className="bi bi-chevron-right pl-1"></i>
          </p>
        </div>
      </div>
      <div className="bg-home-banner pb-40">
        <h1 className="font-serif text-7xl text-center pt-20">Our Gallery</h1>
        <p className="text-gray-600 pt-3 text-center pb-32">
          Adipiscing contentiones te sea, at per vero oratio corrumpit. Ne
          vocent impetus <br /> usu. Eos hinc senserit et, eu eam nullam
          recusabo voluptatum.
        </p>
        <div className="">
          <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="">
              <div className="pb-4 overflow-hidden object-cover">
                <img
                  className="hover:scale-[1.1]"
                  src="https://i.imgur.com/oLlovAt.jpg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden object-cover">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/VAj3J05.jpg"
                    alt=""
                  />
                </div>
                <div className="overflow-hidden object-cover">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/r3QqLrG.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="object-cover overflow-hidden">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/GH1QyFP.jpg"
                    alt=""
                  />
                </div>
                <div className="object-cover overflow-hidden">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/Q5Snn5A.jpg"
                    alt=""
                  />
                </div>
                <div className="object-cover overflow-hidden">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/LLJGxzm.jpg"
                    alt=""
                  />
                </div>
                <div className="object-cover overflow-hidden">
                  <img
                    className="hover:scale-[1.1]"
                    src="https://i.imgur.com/P9vyKaC.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 object-cover overflow-hidden">
                <img
                  className="hover:scale-[1.1]"
                  src="https://i.imgur.com/OdL5yFg.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-banner-email pt-[100px] pb-[200px] bg-cover bg-center bg-no-repeat">
        <h1 className="font-serif text-white text-5xl text-center pt-20">
          Subscribe to Newsletter
        </h1>
        <form className="text-center pt-10" action="">
          <input
            type="text"
            name=""
            placeholder="E-mail Adress"
            className="pr-32 pl-3 text-white py-3 bg-transparent border border-inherit outline-0 text-white"
          />
          <button className="bg-white text-sm text-black px-10 py-[18px] border bg-white ">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="">
        <h1 className="font-serif text-6xl text-center pt-36">
          Latest products
        </h1>
        <p className="text-gray-600 pt-3 text-center pb-32">
          Mei invenire periculis ei, offendit mediocrem ne sea, eos suas elitr
          everti ea.
        </p>
        {/* <div className="grid grid-cols-4 max-w-6xl mx-auto gap-5"> */}
        <Product />
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
