import { IUser } from "../types/user";
import instance from "./instance";

export const registers = (user: IUser) => {
  console.log(user);

  const url = "/signup";
  return instance.post(url, user);
};
export const Signin = (user: IUser) => {
  const url = "/signin";
  return instance.post(url, user);
};
