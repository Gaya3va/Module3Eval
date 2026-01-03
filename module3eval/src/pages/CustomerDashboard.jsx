import { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>
      {data.map((el) => (
        <RestaurantCard key={el.restaurantID} {...el} />
      ))}
    </div>
  );
};

export default CustomerDashboard;
