import { Link } from "react-router-dom";
import "./styles/adminNav.css";

export default function DashNav() {
  return (
    <div className="dash_nav">
      <div
        style={{
          margin: "2em 4em 0em 4em",
        }}
      >
        <h1>Welcome</h1>
        <p
          style={{
            display: "none",
          }}
          className="computer_alert"
        >
          <small>please log into a computer for optimized view</small>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
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
