// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FindPartner from "./pages/FindPartner";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import CreateOffer from "./pages/CreateOffer";
import EditProfile from "./pages/EditProfile";
import ActiveExchanges from "./pages/ActiveExchanges";
import AdminDashboard from "./pages/AdminDashboard"; // <-- Add this import
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/find-partner" element={<FindPartner />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/active-exchanges" element={<ActiveExchanges />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
