import { Link } from "react-router-dom";

export default function DashNav() {
  return (
    <div className="dash_nav">
      <div
        style={{ display: "flex", justifyContent: "space-evenly" }}
        className="wrapper"
      >
        <Link to="/admin/article">Manage articles</Link>
        <Link to="/admin/Product">Manage products</Link>
        <Link to="/admin/user">Manage users</Link>
      </div>
    </div>
  );
}
