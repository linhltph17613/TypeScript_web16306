import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  cate: string;
};
const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();
  const naviate = useNavigate();
  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    props.onAdd(data);
    // naviate("/admin/products");
  };
  return (
    <div className="">
      <form className="mx-auto max-w-3xl">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          type="submit"
          className="border bg-blue-500 px-5 py-2 font-medium"
        >
          Submit
        </button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name Product " {...register("name")} />
        <input
          type="number"
          placeholder="Price Product  "
          {...register("price")}
        />
        <input type="text" placeholder="Image Product" {...register("image")} />
        <input
          type="desc"
          placeholder="Description Product"
          {...register("desc")}
        />
        <input
          type="number"
          placeholder="Weight Product"
          {...register("weight")}
        />
        <input
          type="text"
          placeholder="Demensions "
          {...register("demension")}
        />
        <input type="text" placeholder="Category " {...register("cate")} />

        <button>Add</button>
      </form>
    </div>
  );
};

export default ProductAdd;
