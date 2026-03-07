import axios from "axios";
import { getAxiosConfig } from "./getAxiosConfig";

const addUrl = "http://localhost:8000/api/v1/products";

export async function saveProduct(product) {
  const res = await axios.post(`${addUrl}`, product, getAxiosConfig());
  return res.data;
}
