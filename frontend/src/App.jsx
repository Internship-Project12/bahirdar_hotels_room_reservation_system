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
import HotelsListPage from "./pages/hotels/HotelsListPage";
import AddHotel from "./features/hotels/AddHotel";
import HotelDetailsPage from "./pages/hotels/HotelDetailsPage";
import UpdateHotel from "./features/hotels/UpdateHotel";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./features/users/ManageUsers";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import HotelsTable from "./pages/dashboard/HotelsTable";
import Bookings from "./pages/dashboard/Bookings";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<SigninPage />} />
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
      </Routes>
    </Router>
  );
}

export default App;
