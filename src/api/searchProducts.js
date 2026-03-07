import axios from "axios";

const searchUrl = "http://localhost:8000/api/v1/products/search?title=";

export async function searchProducts(searchText) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      // Accept: "application/json",
    },
  };

  const res = await axios.get(`${searchUrl}${searchText}`, options);
  return res.data;
}
