import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../api/auth";
import { authenticated } from "../utils/localStorage";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../component/Footer";
import NavHeader from "../component/NavHeader";

type TypeInputs = {
  email: string;
  password: string;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
    const { data: user } = await signin(data);
    console.log(user);
    // localstorage
    authenticated(user, () => {
      toastr.success("Đăng nhập thành công");
      navigate("/");
    });
  };
  return (
    <div className="">
      <header
        style={{ backgroundImage: "url('https://i.imgur.com/35J0KJ3.jpg')" }}
        className="bg-local hover:bg-fixed pt-6 pb-32  bg-cover bg-center bg-no-repeat  "
      >
        <nav className="flex justify-between">
          <div className="px-10 py-2">
            <img src="https://i.imgur.com/GZnhgQQ.png" alt="" />
          </div>
          <div className="flex">
            <NavHeader />
            <div className="px-5 mt-4">
              <i className="fa-brands fa-facebook-f px-2"></i>
              <i className="fa-brands fa-instagram px-2"></i>
              <i className="fa-brands fa-twitter px-2"></i>
            </div>
            <div className="mt-4 pr-10">
              <span className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>

                <span className="inline-flex absolute  items-center top-[-13px] right-[-20px] justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black  bg-white rounded-full">
                  9
                </span>
              </span>
            </div>
          </div>
        </nav>

        <div className="w-2/3 mx-auto pt-20 pl-12 ">
          <h3 className=" leading-tight font-serif text-7xl  py-5">Sign up</h3>
          <p className="text-[#b97c5e] font-medium">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </header>
      <form
        style={{
          width: "500px",
          margin: "auto",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3 mt-[50px]">
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
          <div className="flex gap-5">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
            <br />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Do you already have an account{" "}
              <a href="/register" className="text-[#b97c5e]">
                Signup
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary px-5 py-3 bg-[#b97c5e] hover:bg-[#b96c4e] border-0"
        >
          SIGNIN
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Signin;
