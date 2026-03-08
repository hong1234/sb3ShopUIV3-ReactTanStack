import { Link } from "react-router";

export default function NewProduct() {
  return (
    <>
      <Link to="/admin/new">
        <button
          type="button"
          //   onClick={handleClickOpen}
          className="btn btn-primary"
        >
          New Product
        </button>
      </Link>
    </>
  );
}
