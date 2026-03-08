import { Outlet } from "react-router";

export default function Admin() {
  return (
    <>
      <h5 className="bg-primary text-white text-center p-2">Admin</h5>
      <Outlet />
      {/* <NewProduct /> */}
    </>
  );
}
