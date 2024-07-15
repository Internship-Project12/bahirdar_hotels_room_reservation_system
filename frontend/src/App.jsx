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
import DashboardLayout from "./features/dashboard/DashboardLayout";
import AllHotels from "./features/hotels/AllHotels";
import UserProfile from "./features/profile/UserProfile";
import About from "./ui/homepage/About";
import ProtectRoutes from "./ui/ProtectRoutes";
import AllBookings from "./features/bookings/AllBookings";
import { useAuthContext } from "./context/AuthContext";
import HotelBookings from "./features/bookings/HotelBookings";
import AllUsers from "./features/users/AllUsers";
import HotelUsers from "./features/users/HotelUsers";
import HotelRoomsTable from "./features/rooms/HotelRoomsTable";

function App() {
  const { role } = useAuthContext();

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
        <Route
          path="/dashboard"
          element={
            <ProtectRoutes>
              <DashboardLayout />
            </ProtectRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          {role === "admin" ? (
            <>
              <Route path="hotels" element={<AllHotels />} />
              <Route path="add-hotel" element={<AddHotel />} />
              <Route path="update-hotel/:id" element={<UpdateHotel />} />
              <Route path="bookings" element={<AllBookings />} />
              <Route path="users" element={<AllUsers />} />
            </>
          ) : role === "manager" ? (
            <>
              <Route path="rooms" element={<HotelRoomsTable />} />
              <Route path="users" element={<HotelUsers />} />
              <Route path="bookings" element={<HotelBookings />} />
            </>
          ) : null}
        </Route>

        {/* NOT FOUND ROUTES */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
