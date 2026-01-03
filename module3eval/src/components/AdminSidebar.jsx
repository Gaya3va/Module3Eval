import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const AdminSidebar = ({ refresh }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: true,
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524dfde-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  });

  const handleAdd = () => {
    if (!form.restaurantName || !form.address) {
      alert("Fields cannot be empty");
      return;
    }

    const existing = getRestaurants();

    const newRestaurant = {
      restaurantID: Date.now(),
      ...form
    };

    saveRestaurants([...existing, newRestaurant]);
    alert("Restaurant added");
    refresh();

    setForm({
      ...form,
      restaurantName: "",
      address: ""
    });
  };

  return (
    <div style={{ width: "300px", padding: "10px", borderRight: "1px solid gray" }}>
      <h3>Add Restaurant</h3>

      <input
        placeholder="Restaurant Name"
        value={form.restaurantName}
        onChange={(e) =>
          setForm({ ...form, restaurantName: e.target.value })
        }
      />

      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select
        value={form.parkingLot}
        onChange={(e) =>
          setForm({ ...form, parkingLot: e.target.value === "true" })
        }
      >
        <option value="true">Parking Yes</option>
        <option value="false">Parking No</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AdminSidebar;
