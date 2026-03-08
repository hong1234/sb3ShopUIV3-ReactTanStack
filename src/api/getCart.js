import axios from "axios";
import { getAxiosConfig, getCustomerId } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";

export const getCart = async () => {
  // const options = {
  //   headers: {
  //     Authorization: sessionStorage.getItem("jwt"),
  //     "Content-Type": "application/json",
  //   },
  // };
  // const res = await axios.get(`${cartUrl}${customerId}`, options);
  const res = await axios.get(`${cartUrl}` + getCustomerId(), getAxiosConfig());
  return res.data;
};
