import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const UpdateRestaurant = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(state);

  const handleUpdate = () => {
    if (!window.confirm("Confirm update?")) return;

    const data = getRestaurants();
    const updated = data.map((item) =>
      item.restaurantID === form.restaurantID ? form : item
    );

    saveRestaurants(updated);
    alert("Updated successfully");
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Update Restaurant</h2>

      <input
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
      />

      <input
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateRestaurant;
