import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import SinginPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import HotelsListPage from "./pages/HotelsListPage";
import AddHotel from "./pages/admin/AddHotel";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import UpdateHotel from "./pages/UpdateHotel";
import Dashboard from "./pages/admin/Dashboard";
import Bookings from "./pages/Bookings";
import Users from "./features/admin/users/ManageUsers";
import DashboardLayout from "./features/admin/dashboard/DashboardLayout";
import HotelsTable from "./features/admin/hotels/HotelsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SinginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsListPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/booking/:id" element={<p>Hotel booking page</p>} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/update-hotel/:id" element={<UpdateHotel />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/hotels" element={<HotelsTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
