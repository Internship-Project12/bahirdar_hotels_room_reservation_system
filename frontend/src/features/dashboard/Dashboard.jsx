import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";

function Dashboard() {
  const { role } = useAuthContext();

  console.log(role)

  const navigate = useNavigate();

  return role === "admin" ? (
    <AdminDashboard />
  ) : role === "manager" ? (
    <ManagerDashboard />
  ) : (
    navigate("/")
  );
}

export default Dashboard;
