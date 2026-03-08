import axios from "axios";
import { getAxiosConfig, getCustomerId } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";

export const checkoutCart = async () => {
  const res = await axios.get(
    `${cartUrl}` + getCustomerId() + "/checkout",
    getAxiosConfig(),
  );
  return res.data;
};
