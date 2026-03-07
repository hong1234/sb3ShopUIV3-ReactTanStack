import axios from "axios";
import { getAxiosConfig } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";
const customerId = sessionStorage.getItem("customerId");

export async function addItem(productId) {
  const itemDTO = {
    modus: "add",
    productId: productId,
  };

  const res = await axios.put(
    `${cartUrl}${customerId}` + "/items",
    itemDTO,
    getAxiosConfig(),
  );

  return res.data;
}
