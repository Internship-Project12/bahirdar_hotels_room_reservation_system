import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import SinginPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import HotelsListPage from "./pages/HotelsListPage";
import AddHotel from "./pages/AddHotel";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import UpdateHotel from "./pages/UpdateHotel";
import Dashboard from "./pages//Dashboard";
import Bookings from "./pages/Bookings";
import Users from "./features/users/Users";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import HotelsTable from "./features/hotels/HotelsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SinginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
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
