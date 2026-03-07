import axios from "axios";
import { getAxiosConfig } from "./getAxiosConfig";

const orderUrl = "http://localhost:8000/api/v1/orders/";

export const getOrder = async (orderId) => {
  const res = await axios.get(`${orderUrl}${orderId}`, getAxiosConfig());
  return res.data;
};
