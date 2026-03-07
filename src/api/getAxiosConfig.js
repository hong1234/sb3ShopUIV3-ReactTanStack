export const getAxiosConfig = () => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
};
