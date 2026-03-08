export const getAxiosConfig = () => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
};

export function getCustomerId() {
  return sessionStorage.getItem("customerId");
}
