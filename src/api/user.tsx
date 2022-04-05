import { IUser } from "../types/User";
import instance from "./instance";

export const list = () => {
  const url = "/user";
  return instance.get(url);
};

export const remove = (id: number) => {
  const url = `/user/${id}`;
  return instance.delete(url);
};

export const read = (id: string | undefined) => {
  const url = `/user/${id}`;
  return instance.get(url);
};

export const add = (user: IUser) => {
  const url = "/user";
  return instance.post(url, user);
};
