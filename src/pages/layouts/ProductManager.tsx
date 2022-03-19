import React from "react";
import type { IProduct } from "../../types/product";

type ProductManagerProps = {
  products: IProduct[];
  onRemove: (id: number) => void;
};

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name </th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => props.onRemove(item._id)}>
                    Remove
                  </button>
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
