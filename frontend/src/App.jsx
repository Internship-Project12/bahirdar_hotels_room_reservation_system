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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SinginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsListPage />} />
          <Route path="/booking/:bookId" element={<p>Hotel booking page</p>} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
