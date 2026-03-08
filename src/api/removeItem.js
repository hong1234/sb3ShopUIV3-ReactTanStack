import axios from "axios";
import { getAxiosConfig, getCustomerId } from "./getAxiosConfig";

const cartUrl = "http://localhost:8000/api/v1/carts/";

export async function removeItem(productId) {
  const itemDTO = {
    modus: "remove",
    productId: productId,
  };

  const res = await axios.put(
    `${cartUrl}` + getCustomerId() + "/items",
    itemDTO,
    getAxiosConfig(),
  );

  return res.data;
}
