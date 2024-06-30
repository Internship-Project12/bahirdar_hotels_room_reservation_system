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
// import Dashboard from "./pages/Dashboard";
// import Bookings from "./pages/Bookings";
// import Users from "./components/users/Users";
// import DashboardLayout from "./components/dashboard/DashboardLayout";
// import HotelsTable from "./components/hotels/HotelsTable";

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
        {/* <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/hotels" element={<HotelsTable />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
