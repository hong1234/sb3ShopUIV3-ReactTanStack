import axios from "axios";
import { getAxiosConfig, getCustomerId } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";

export const getCart = async () => {
  const res = await axios.get(`${cartUrl}` + getCustomerId(), getAxiosConfig());
  return res.data;
};
