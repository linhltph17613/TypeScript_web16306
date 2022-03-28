import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ProductAddProps = {
  name: string;
  onAdd: (product: TypeInputs) => void;
};
type TypeInputs = {
  name: string;
  price: number;
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Tên sản phẩm " {...register("name")} />
      <input type="number" placeholder="Giá sản phẩm " {...register("price")} />
      <button>Add</button>
    </form>
  );
};

export default ProductAdd;
