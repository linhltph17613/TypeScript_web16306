import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registers } from "../api/user";
type SigninProps = {
  name: string;
  onSign: (user: TypeFormSign) => void;
};
type TypeFormSign = {
  name: string;
  email: string;
  password: number;
};
const Signup = (props: SigninProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormSign>();
  const navigate = useNavigate();
  const onSign: SubmitHandler<TypeFormSign> = (data) => {
    registers(data);
    navigate("/signin");
  };
  return (
    <form
      style={{
        width: "500px",
        margin: "auto",
      }}
      onSubmit={handleSubmit(onSign)}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Your name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register("email")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          {...register("password")}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Signup;
