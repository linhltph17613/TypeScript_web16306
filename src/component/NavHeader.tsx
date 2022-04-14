import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type Props = {};

const NavHeader = (props: Props) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    toastr.success("Đăng xuất thành công");

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
            <Link
              className="block py-4 px-4 text-black font-medium hover:text-[#b97c5e];"
              to={"/"}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="block py-4 px-4 text-black font-medium hover:text-[#B97C5E];"
              to={"/about"}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="block py-4 px-4 text-black font-medium hover:text-[#B97C5E];"
              to={"/products/1"}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              to={"/contact"}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              to={"/admin/dashboard"}
            >
              ADMIN
            </Link>
          </li>
          <li>
            <Link
              className="block py-4 px-3 text-black font-medium hover:text-[#B97C5E];"
              to={"/login"}
            >
              <i className="fa-solid fa-user"></i>
            </Link>
            <ul className="subnav ">
              <li>
                <Link className="text-black-500 font-medium" to={"/login"}>
                  LOGIN
                </Link>
              </li>
              <li>
                <Link className="text-black-500 font-medium" to={"/register"}>
                  SIGNUP
                </Link>
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
