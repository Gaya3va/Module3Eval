
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Load data from localStorage
  const refresh = () => {
    const restaurants = getRestaurants();
    setData(restaurants);
  };

  useEffect(() => {
    refresh();
  }, []);

  // DELETE restaurant
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    const updated = data.filter(
      (item) => item.restaurantID !== id
    );

    saveRestaurants(updated);
    setData(updated);
    alert("Restaurant deleted successfully");
  };

  // UPDATE restaurant (navigate)
  const handleUpdate = (restaurant) => {
    navigate("/admin/restaurants/update", {
      state: restaurant
    });
  };

  return (
    <div style={{ display: "flex" }}>
      
      {/* ADMIN SIDEBAR (ADD FORM) */}
      <AdminSidebar refresh={refresh} />

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: "20px", width: "100%" }}>
        <h2>Admin Dashboard</h2>

        {data.length === 0 ? (
          <p>No restaurants added yet</p>
        ) : (
          data.map((restaurant) => (
            <RestaurantCard
              key={restaurant.restaurantID}
              {...restaurant}
              isAdmin={true}
              onUpdate={() => handleUpdate(restaurant)}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
