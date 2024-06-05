import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import LoginPage from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          {/*<Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<DashboardPage />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
