import { ICate } from "../types/cate";
import instance from "./instance";

export const list = () => {
  const url = "/category";
  return instance.get(url);
};

export const remove = (id: number | string) => {
  const url = `/category/${id}`;
  return instance.delete(url);
};

export const read = (id: string | undefined) => {
  const url = `/category/${id}`;
  return instance.get(url);
};

export const add = (cate: ICate) => {
  const url = "/category";
  return instance.post(url, cate);
};
export const addcart = (productcart: ICate) => {
  const url = `/category`;
  return instance.post(url, productcart);
};
