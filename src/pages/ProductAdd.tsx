import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type ProductAddProps = {
  name: string;
  onAdd: (product: TypeInputs) => void;
};
type TypeInputs = {
  name: string;
  image: string;
  price: number;
  desc: string;
  weight: number;
  demension: string;
  // cate: string;
};
const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();
  const naviate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    const newData = {
      ...data,
      demensions: data.demension,
      price: +data.price,
      weight: +data.weight,
      category: "6232e7587f637b65ca5abd4d",
    };
    props.onAdd(newData);
    toastr.success("Thêm sản phẩm thành công");

    naviate("/admin/products");
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
            {...register("demension")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            {...register("cate")}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div> */}

        <button
          type="submit"
          className="border bg-[#b97c5e] px-5 py-2 font-medium"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
