import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type TypeInputs = {
  name: string;
  price: number;
};
const ProductAdd = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();
  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    console.log(data);
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
