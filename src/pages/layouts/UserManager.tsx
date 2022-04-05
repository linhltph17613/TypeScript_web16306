import React from "react";
import { IUser } from "../../types/User";

type UserProps = {
  user: IUser[];
  onRemove: (id: number) => void;
};

const UserManager = (props: UserProps) => {
  console.log(props);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>

                {/* <td>{item.desc}</td> */}

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

export default UserManager;
