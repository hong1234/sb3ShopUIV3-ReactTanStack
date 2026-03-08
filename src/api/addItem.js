import axios from "axios";
import { getAxiosConfig, getCustomerId } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";

export async function addItem(productId) {
  const itemDTO = {
    modus: "add",
    productId: productId,
  };

  const res = await axios.put(
    // `${cartUrl}${customerId}` + "/items",
    `${cartUrl}` + getCustomerId() + "/items",
    itemDTO,
    getAxiosConfig(),
  );

  return res.data;
}
