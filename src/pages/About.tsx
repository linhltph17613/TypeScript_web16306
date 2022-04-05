import React from "react";
import Footer from "../component/Footer";
import NavHeader from "../component/NavHeader";

type Props = {};

const AboutPage = (props: Props) => {
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
          <h3 className=" leading-tight font-serif text-7xl  py-5">About Us</h3>
          <p className="text-[#b97c5e] font-medium">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </header>
      <div className="mt-[100px] max-w-6xl mx-auto grid grid-cols-2 gap-5">
        <div className="">
          <h1 className="text-5xl font-serif font-medium pb-2  pt-3">
            What we do
          </h1>
          <p className="text-lg">
            Mei invenire periculis ei, offendit mediocrem ne sea, eos suas elitr
            everti ea. Per vidit rebum quodsi id. Pericula interpretaris ea pri,
            prima conguen terpretaris prim. Ipsum, nec sagittis sem nibh id
            elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris.
          </p>
          <p className="text-lg">
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
            accumsan ipsum velit
          </p>
          <img src="https://i.imgur.com/fCmG6OZ.png" alt="" />
        </div>
        <div className="">
          <img src="https://i.imgur.com/Oc78Alk.jpg" alt="" />
        </div>
      </div>
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
      <Footer />
    </div>
  );
};

export default AboutPage;
