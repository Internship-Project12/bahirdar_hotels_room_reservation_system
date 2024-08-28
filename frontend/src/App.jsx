import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AddHotel from "./features/hotels/AddHotel";
import UpdateHotel from "./features/hotels/UpdateHotel";
import Dashboard from "./features/dashboard/Dashboard";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import AllHotels from "./features/hotels/AllHotels";
import Account from "./features/profile/Account";
import About from "./ui/homepage/About";
import ProtectRoutes from "./ui/ProtectRoutes";
import AllBookings from "./features/bookings/AllBookings";
import { useAuthContext } from "./context/AuthContext";
import HotelBookings from "./features/bookings/HotelBookings";
import AllUsers from "./features/users/AllUsers";
import HotelUsers from "./features/users/HotelUsers";
import HotelRoomsTable from "./features/rooms/HotelRoomsTable";
import AddRoom from "./features/rooms/AddRoom";
import UpdateRoom from "./features/rooms/UpdateRoom";
import Settings from "./features/settings/Settings";

import {
  HomePage,
  HotelDetailsPage,
  HotelsListPage,
  SigninPage,
  SignupPage,
} from "./pages";
import RoomsListPage from "./pages/RoomsListPage";
import RoomListDetail from "./ui/RoomListDetail";
import Profile from "./features/profile/Profile";
import AccountSettings from "./features/profile/AccountSettings";
import { useEffect, useState } from "react";
import MyBookings from "./features/profile/MyBookings";
import ResetMyPassword from "./features/profile/ResetMyPassword";

function App() {
  const { role, isLoggedIn } = useAuthContext();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTES */}
        <Route element={<AppLayout />}>
          {initialLoad && (role === "manager" || role === "admin") ? (
            <Route path="/" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
          <Route path="about" element={<About />} />
          <Route path="hotels" element={<HotelsListPage />} />
          <Route path="hotels/:id" element={<HotelDetailsPage />} />
          <Route path="hotels/:hotelId/rooms" element={<RoomsListPage />}>
            <Route path=":roomId" element={<RoomListDetail />} />
          </Route>

          <Route path="/booking/:id" element={<p>Hotel booking page</p>} />
          {isLoggedIn && (
            <Route path="account" element={<Account />}>
              <Route path="profile" index element={<Profile />} />
              <Route path="settings" element={<AccountSettings />} />
              <Route path="bookings" element={<MyBookings />} />
            </Route>
          )}
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
              <Route path="add-room" element={<AddRoom />} />
              <Route path="update-room/:id" element={<UpdateRoom />} />
              <Route path="users" element={<HotelUsers />} />
              <Route path="bookings" element={<HotelBookings />} />
              <Route path="settings" element={<Settings />} />
            </>
          ) : null}
        </Route>
        <Route path="/settings/:resetToken" element={<ResetMyPassword />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* NOT FOUND ROUTES */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
