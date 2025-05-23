import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./components/Login";
import Signup from "./components/signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
