import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/product";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type ProductEditProps = {
  name: string;
  onEdit: (product: TypeInputs) => void;
};
type TypeInputs = {
  name: string;
  image: string;
  price: number;
  desc: string;
  weight: number;
  demensions: string;
  cate: string;
};
const ProductEdit = (props: ProductEditProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeInputs>();
  const [data, setData] = useState([]);
  const naviate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const productEdit = async () => {
      const { data } = await read(id);
      setData(data);
      reset(data);
    };
    productEdit();
  }, [id]);
  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    try {
      props.onEdit(id, data);
      toastr.success("Sửa sản phẩm thành công");
      naviate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl">
        <div className="mb-3">
          <label className="form-label">Name Product</label>
          <input
            type="text"
            {...register("name")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Product</label>
          <input
            type="number"
            {...register("price")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Product</label>
          <input
            type="text"
            {...register("image")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description Product</label>
          <input
            type="desc"
            {...register("desc")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight Product</label>
          <input
            type="number"
            {...register("weight")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Demensions</label>
          <input
            type="text"
            {...register("demensions")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          type="submit"
          className="border bg-[#b97c5e] px-5 py-2 font-medium"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
