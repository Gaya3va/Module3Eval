import { useEffect, useState } from "react";
import { getData, setData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [data, setDataState] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDataState(getData());
  }, []);

  const addRestaurant = () => {
    if (!name) return alert("Empty form not allowed");

    const newRes = {
      restaurantID: Date.now(),
      restaurantName: name,
      address: "Jaipur",
      type: "Rajasthani",
      parkingLot: true,
      image:
        "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524dfde-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    };

    const updated = [...data, newRes];
    setData(updated);
    setDataState(updated);
    alert("Restaurant added");
    setName("");
  };

  const filtered = data.filter(
    (el) =>
      el.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
      el.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Navbar search={search} setSearch={setSearch} />

      <input
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addRestaurant}>Add</button>

      {filtered.map((el) => (
        <RestaurantCard key={el.restaurantID} {...el} isAdmin />
      ))}
    </div>
  );
};

export default AdminDashboard;
