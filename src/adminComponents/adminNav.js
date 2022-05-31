import { Link } from "react-router-dom";

export default function DashNav() {
  return (
    <div className="dash_nav">
      <div
        style={{ display: "flex", justifyContent: "space-evenly" }}
        className="wrapper"
      >
        <Link className="nav-link" to="/admin/article">
          Manage articles
        </Link>
        <Link className="nav-link" to="/admin/Product">
          Manage products
        </Link>
        <Link className="nav-link" to="/admin/Categories">
          Manage Categories
        </Link>
        <Link className="nav-link" to="/admin/user">
          Manage users
        </Link>
        <Link className="nav-link" to="/admin/collections">
          Manage Collections
        </Link>
        <Link className="nav-link" to="/admin/orders">
          Manage Orders
        </Link>
      </div>
    </div>
  );
}
