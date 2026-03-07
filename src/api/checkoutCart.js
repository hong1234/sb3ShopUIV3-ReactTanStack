import axios from "axios";
import { getAxiosConfig } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";
const customerId = sessionStorage.getItem("customerId");

export const checkoutCart = async () => {
  const res = await axios.get(
    `${cartUrl}${customerId}` + "/checkout",
    getAxiosConfig(),
  );
  return res.data;
};
