import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Results from "./Results";

export default function Routess() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {/* Define nested routes for multiple paths */}
        {/* <Route path="/search" element={<Outlet />}>
          <Route index element={<Results />} />
          <Route path="images" element={<Results />} />
          <Route path="news" element={<Results />} />
          <Route path="videos" element={<Results />} />
        </Route> */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}
