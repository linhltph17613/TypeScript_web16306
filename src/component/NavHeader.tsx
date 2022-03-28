import React from "react";

type Props = {};

const NavHeader = (props: Props) => {
  return (
    <div className="menu top-0">
      <ul className="flex text-sm">
        <li className="hover:text-[#b97c5e]">
          <a
            className="block py-4 px-4  font-medium hover:text-[#b97c5e];"
            href="/"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="block py-4 px-4  font-medium hover:text-[#B97C5E];"
            href="/about"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            className="block py-4 px-4  font-medium hover:text-[#B97C5E];"
            href="/products"
          >
            SHOP
          </a>
        </li>
        <li>
          <a
            className="block py-4 px-3  font-medium hover:text-[#B97C5E];"
            href="/contact"
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            className="block py-4 px-3  font-medium hover:text-[#B97C5E];"
            href="/login"
          >
            SIGNIN
          </a>
        </li>
        <li>
          <a
            className="block py-4 px-3  font-medium hover:text-[#B97C5E];"
            href="/register"
          >
            SIGNUP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavHeader;
