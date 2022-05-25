import { Outlet } from "react-router-dom";
import DashNav from "./adminNav";

function Dashboard() {
  return (
    <div style={{ marginTop: "4em" }}>
      <DashNav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
