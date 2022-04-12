import React from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type Props = {};

const NavHeader = (props: Props) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  // const logout = document.querySelector("#logout");
  // logout.addEventListener("click", () => {
  //   localStorage.removeItem("user");
  //   toastr.success("Bạn đã đăng xuất thành công!");
  // });
  return (
    <div className="menu top-0">
      <nav className="menu">
        <ul className="flex text-sm">
          <li className="hover:text-[#b97c5e]">
            <a
              className="block py-4 px-4 text-black font-medium hover:text-[#b97c5e];"
              href="/"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 text-black font-medium hover:text-[#B97C5E];"
              href="/about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-4 text-black font-medium hover:text-[#B97C5E];"
              href="/products/1"
            >
              SHOP
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              href="/contact"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              href="/admin/dashboard"
            >
              ADMIN
            </a>
          </li>
          <li>
            <a
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              href="/login"
            >
              <i className="fa-solid fa-user"></i>
            </a>
            <ul className="subnav ">
              <li>
                <a className="text-black-500 font-medium" href="/login">
                  LOGIN
                </a>
              </li>
              <li>
                <a className="text-black-500 font-medium" href="/register">
                  SIGNUP
                </a>
              </li>
              <li>
                <div
                  className="text-black-500 font-medium cursor-pointer"
                  id="logout"
                  onClick={() => Logout()}
                >
                  LOG OUT
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavHeader;
