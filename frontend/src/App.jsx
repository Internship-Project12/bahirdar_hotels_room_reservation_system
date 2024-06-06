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
import HotelsPage from "./pages/HotelsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SinginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          {/*<Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<DashboardPage />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
