import React from "react";
import type { ICate } from "../../types/cate";

type CategoryProps = {
  category: ICate[];
  onRemove: (id: number) => void;
};

const CategoryManager = (props: CategoryProps) => {
  console.log(props);
  return (
    <div>
      <a className="btn btn-primary" href="/admin/category/add" role="button">
        Add Category
      </a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.category.map((cate, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{cate.name}</td>
                {/* <td>{item.desc}</td> */}

                <td>
                  <button onClick={() => props.onRemove(cate._id)}>
                    Remove
                  </button>
                  <a className="px-2" href="">
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManager;
