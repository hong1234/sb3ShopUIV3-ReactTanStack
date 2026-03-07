import axios from "axios";

const loginUrl = "http://localhost:8000/api/v1/auth/signin";

export async function userLogin(creds) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios.post(`${loginUrl}`, creds, options);
  return res.data;
}
