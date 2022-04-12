import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    PageNumber.push(i);
  }
  return (
    <>
      <div className="max-w-xl  mx-auto">
        <nav className="">
          <ul className="pagination">
            {PageNumber.map((number, index) => (
              <li key={number} className="page-item  ">
                <Link
                  onClick={() => paginate(number)}
                  to={`/products/${number}`}
                  className="page-link px-4 py-2 font-medium text-black hover:text-white border hover:bg-[#b97c5e]"
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
