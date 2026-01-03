import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const restaurants = getRestaurants();
    setData(restaurants);
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>

      {data.length === 0 ? (
        <p>No restaurants available</p>
      ) : (
        data.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurantID}
            {...restaurant}
          />
        ))
      )}
    </div>
  );
};

export default CustomerDashboard;
