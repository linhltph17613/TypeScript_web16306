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

                <span className="inline-flex absolute  items-center top-[-13px] right-[-20px] justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black  bg-white  w-full">
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
        </div>
      </header>
      <div className="">
        <div className="grid grid-cols-2 gap-3 max-w-6xl pt-4 mx-auto">
          <iframe
            className="w-[500px] h-[500px] border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.054438230067!2d108.07288781413271!3d12.709869924007759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7d129f29e75%3A0x4a950c104f61c8bb!2sFPT%20Polytechnic%20T%C3%A2y%20Nguy%C3%AAn!5e0!3m2!1sen!2s!4v1644159693568!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
          <div className=" pb-[30px]">
            <h3 className="font-medium text-3xl py-2 font-serif">
              Get in Touch
            </h3>
            <p className="text-lg">
              Mei invenire periculis ei, offendit mediocrem ne sea, eos suas
              elitr everti ea. Per vidit rebum quodsi id. Pericula interpre.
            </p>
            <form action="">
              {/* <p className="pt-3 ">Your Name</p>{" "} */}
              <input
                className="border my-2 px-2  w-full py-3 "
                placeholder="Your Name"
                type="text"
              />
              {/* <p className="pt-3 ">Your Email</p>{" "} */}
              <input
                className="border my-2 px-2 w-full w-full py-3"
                placeholder="Your Email"
                type="text"
              />
              {/* <p className="pt-3 ">Write Something</p>{" "} */}
              <textarea
                name="your-message"
                placeholder="Write Something"
                className="wpcf7-form-control mt-2 my-2 px-2 wpcf7-textarea border w-full h-[160px]"
                aria-invalid="false"
              ></textarea>{" "}
              <br />
              <button
                className=" px-8 py-2 bg-[#b97c5e]  w-full buttun text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
