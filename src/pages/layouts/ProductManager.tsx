import React from "react";
import type { IProduct } from "../../types/product";

type ProductManagerProps = {
  products: IProduct[];
  onRemove: (id: number | string) => void;
};

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <a className="btn btn-primary" href="/admin/products/add" role="button">
        Add Product
      </a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name </th>
            <th scope="col">Image</th>
            <th scope="col">Desc</th>
            <th scope="col">Price</th>
            <th scope="col">weight</th>
            <th scope="col">demensions</th>
            {/* <th scope="col">category</th> */}

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <img className="w-[70px]" src={item.image} />
                </td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.weight}</td>
                <td>{item.demensions}</td>
                {/* <td>{item.category}</td> */}

                {/* <td>{item.desc}</td> */}
                <td></td>

                <td>
                  <button
                    onClick={() => {
                      if (confirm("Bạn có muốn xóa không?")) {
                        props.onRemove(item._id);
                      }
                    }}
                  >
                    Remove
                  </button>
                  <a className="px-2" href={`products/edit/${item._id}`}>
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

export default ProductManager;
