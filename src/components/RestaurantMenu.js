import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = ()=>{
    const {resId} = useParams(); 

    //fetching data for restaurant
    const resInfo = useRestaurantMenu(resId);
    
    const {
        name,
        city,
        cuisines,
        avgRating,
        areaName,
        totalRatingsString,
        sla,
        costForTwoMessage,
        aggregatedDiscountInfo
    } = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
    //data for menu's
    const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
    // const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
    const category = ( resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => (c.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      )) ?? [];
      
    // console.log(category);
    

    return resInfo === null ? <Shimmer/> 
    : (
        <div className="menu container">
            <p style={{marginTop:"40"+"px"}}>home / {city} / {name}</p>
            <h1>{name}</h1>
            <div className="card" style={{marginTop:"40"+"px",zIndex:0}}>
                <div className="card-body">
                    <div className="card-title">
                    <div className="re-card-rating-n-Time">
                        <img src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-round-icons-others-inmotus-design-4.png" alt="external-Star-round-icons-others-inmotus-design-4"/>
                        <h4>    
                            {avgRating} {totalRatingsString} • {costForTwoMessage}
                        </h4>
                    </div>
                        
                    </div>
                    <a href="#" className="card-link">{cuisines?.[0]}</a>
                    <a href="#" className="card-link">{cuisines?.[1]}</a>
                    <div className="card-subtitle">Outlet : {areaName}</div>
                    <div className="card-subtitle">{sla?.slaString}</div>
                </div>
            </div>

            <div className="Recomanded" style={{marginTop:"40"+"px"}}>
                <h4>Deals for you</h4>
                <div className="d-flex">
                    <div className="card" style={{padding:"10"+"px",marginRight:"20"+"px"}}>
                        <h5>{aggregatedDiscountInfo?.descriptionList?.[0]?.meta}</h5>
                    </div>
                    <div className="card" style={{padding:"10"+"px",marginRight:"20"+"px"}}>
                        <h5>{aggregatedDiscountInfo?.descriptionList?.[1]?.meta}</h5>
                    </div>
                </div>
            </div>

            <div className="Regular" style={{marginTop:"40"+"px"}}>
                    {category.length > 0 ? (
                    <RestaurantCategory category={category} />
                    ) : (
                    <p>No categories available.</p>
                    )}
            </div>
        </div>
    )
}

export default RestaurantMenu;