import { useState,useEffect } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { menuAPI } from "../utils/constants";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);

    const {resId} = useParams(); 
    
    const fetchData = async()=>{
        const data = await fetch(menuAPI+resId);
        const json = await data.json();
        setResInfo(json);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    //data for restaurant
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


    return resInfo === null ? <Shimmer/> 
    : (
        <div className="menu container">
            <p style={{marginTop:"40"+"px"}}>home / {city} / {name}</p>
            <h1>{name}</h1>
            <div className="card" style={{marginTop:"40"+"px"}}>
                <div className="card-body">
                    <div className="card-title">
                        <h4>    
                            {avgRating} {totalRatingsString} - {costForTwoMessage}
                        </h4>
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
                <h4>Recomanded - {itemCards.length}</h4>
                <hr></hr>
                <div>
                    {itemCards.map((item) => (
                        <div key={item?.card?.info?.id}>
                            <h5>{item?.card?.info?.name}</h5>
                            <p>₹{(item?.card?.info?.defaultPrice)/100}</p>
                            <h6>{item?.card?.info?.description}</h6>
                            <hr></hr>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default RestaurantMenu;