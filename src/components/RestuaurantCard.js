const RestuaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData.info;

   // Correct Swiggy Cloudinary Image URL
   const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/${cloudinaryImageId}`; // Placeholder if no image


  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={imageUrl}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <hr />
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime || "N/A"} minutes</h4>
    </div>
  );
};

export default RestuaurantCard;
