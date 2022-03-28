import React from "react";
import Footer from "../component/Footer";
import NavHeader from "../component/NavHeader";

type Props = {};

const Contact = (props: Props) => {
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
            Contact Us
          </h3>
          <p className="text-[#b97c5e] font-medium">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Contact;
