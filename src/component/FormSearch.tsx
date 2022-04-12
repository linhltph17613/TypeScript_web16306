import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {};
type InputSearch = {
  search: string;
};

const FormSearch = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputSearch>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<InputSearch> = async (data) => {
    navigate(`/products/search?q=${data.search}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="py-2  px-2 outline-0 border"
        placeholder="Search.."
        {...register("search")}
      />
      <button
        className="bg-[#b97c5e] hover:bg-[#b96c4e] text-white px-3 py-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default FormSearch;
