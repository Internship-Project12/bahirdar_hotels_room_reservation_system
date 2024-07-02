import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import HotelsListPage from "./pages/HotelsListPage";
import AddHotel from "./pages/admin/AddHotel";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import UpdateHotel from "./pages/UpdateHotel";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./features/admin/users/ManageUsers";
import DashboardLayout from "./features/admin/dashboard/DashboardLayout";
import HotelsTable from "./features/admin/hotels/HotelsTable";

import Bookings from "./pages/Bookings";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<SinginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsListPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/booking/:id" element={<p>Hotel booking page</p>} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/update-hotel/:id" element={<UpdateHotel />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="hotels" element={<HotelsTable />} />
          </Route>
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="hotels" element={<HotelsTable />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hotels" element={<HotelsTable />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
