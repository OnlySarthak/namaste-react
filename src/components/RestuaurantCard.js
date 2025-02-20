const RestuaurantCard = ({ resData}) => {
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
      <div className="res-info">
        <p className="res-title">{name}</p>
        <div className="re-card-rating-n-Time">
          <img src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-round-icons-others-inmotus-design-4.png" alt="external-Star-round-icons-others-inmotus-design-4"/>
          <p>{avgRating} • {sla.deliveryTime || "N/A"} minutes</p>
        </div>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export const HOC = (Card)=>{
  return (prop2)=>{
    return (
      <Card {...prop2}/>
    )
  }
}

export default RestuaurantCard;