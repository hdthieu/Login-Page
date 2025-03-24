import React from "react";
import Login from "./pages/Login";
// import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )

};

export default App;
