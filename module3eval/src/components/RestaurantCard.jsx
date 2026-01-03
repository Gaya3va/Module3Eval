
const RestaurantCard = ({
  restaurantID,
  restaurantName,
  address,
  type,
  parkingLot,
  image,
  isAdmin,
  onUpdate,
  onDelete
}) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "15px" }}>
      <img src={"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"} alt={restaurantName} width="200" />
      <h3>{restaurantName}</h3>
      <p>{address}</p>
      <p>{type}</p>
      <p>Parking {parkingLot ? "Yes" : "No"}</p>

      {isAdmin && (
        <>
          <button onClick={() => onUpdate(restaurantID)}>Update</button>
          <button onClick={() => onDelete(restaurantID)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
