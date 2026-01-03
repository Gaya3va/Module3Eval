import { getData, setData } from "../utils/localStorage";

const RestaurantCard = ({
  restaurantID,
  restaurantName,
  address,
  type,
  parkingLot,
  image,
  isAdmin
}) => {
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    const updated = getData().filter(
      (el) => el.restaurantID !== restaurantID
    );
    setData(updated);
    alert("Deleted successfully");
    window.location.reload();
  };

  return (
    <div>
      <img  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt={restaurantName} width="200" />

      <h3>{restaurantName}</h3>
      <p>{address}</p>
      <p>{type}</p>
      <p>{parkingLot ? "Parking Yes" : "Parking No"}</p>

      {isAdmin && (
        <>
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
