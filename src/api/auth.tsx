import { IUser } from "../types/User";
import instance from "./instance";

export const signup = (user: IUser) => {
  console.log(user);

  const url = "/register";
  return instance.post(url, user);
};
export const signin = (user: IUser) => {
  const url = "/login";
  return instance.post(url, user);
};
