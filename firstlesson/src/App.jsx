import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home_page";
import Register from "./pages/register";
import Login from "./pages/login"; 
import "./App.css";

function App() {
  const isLoggedIn = false; // Assuming the user is not logged in initially

  return (
    <>
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Navigate to="/register" />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
