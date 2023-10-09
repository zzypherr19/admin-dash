import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Settings from "../pages/Settings";

import Bookings from "../pages/Book";
import Places from "../pages/Places";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/places" />} />
      <Route path="/cars" element={<Places />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
};

export default Router;
