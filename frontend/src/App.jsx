import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import HotelsListPage from "./pages/hotels/HotelsListPage";
import AddHotel from "./features/hotels/AddHotel";
import HotelDetailsPage from "./pages/hotels/HotelDetailsPage";
import UpdateHotel from "./features/hotels/UpdateHotel";
import Dashboard from "./features/dashboard/Dashboard";
import Users from "./features/users/Users";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import HotelsTable from "./features/hotels/HotelsTable";
import Bookings from "./features/bookings/Bookings";
import UserProfile from "./features/profile/UserProfile";
// import Hotel from "./features/hotels/Hotel";
import Rooms from "./features/rooms/Rooms";
import About from "./ui/homepage/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTES */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsListPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/booking/:id" element={<p>Hotel booking page</p>} />
        </Route>

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="hotels" element={<HotelsTable />} />
          <Route path="add-hotel" element={<AddHotel />} />
          <Route path="update-hotel/:id" element={<UpdateHotel />} />
          {/* <Route index path="hotel" element={<Hotel />} /> */}
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* NOT FOUND ROUTES */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
