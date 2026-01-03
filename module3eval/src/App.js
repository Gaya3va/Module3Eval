import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/restaurants/update"
        element={
          <ProtectedRoute role="admin">
            <UpdateRestaurant />
          </ProtectedRoute>
        }
      />

      {/* Customer Routes */}
      <Route
        path="/customers/dashboard"
        element={
          <ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
