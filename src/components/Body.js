import RestuaurantCard from "./RestuaurantCard";
import restaurantData from "../utils/mockData";
import { useState,useEffect } from "react";
import restaurantData from "../utils/mockData";
import Shimmer from "./Shimmer";

let backUpData;

const Body = ()=>{

  console.log("rerendered");
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [unfilter, setUnfilter] = useState(false);

  let temp = "";
  
  useEffect(()=>{
    fetchData();
  },[]);
  
  async function fetchData() {
    const data = await 
    fetch('https://thingproxy.freeboard.io/fetch/https://swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    backUpData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  }


  //conditional rendering
  return listOfRestaurants.length === 0 ?
    ( <Shimmer/> ) :
    (
      <div className="Body">
        <div className="filter">
          <div className="search">

            <input type="text" className="search-box" value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>

            <button onClick={()=> {
               const filterdData = backUpData.filter
                          ((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));              
               setListOfRestaurants(filterdData);
               setUnfilter(true)
            }}>search</button>

            {unfilter && (
                <button 
                style={{marginLeft: 5 + 'px'}}
                onClick={()=>{
                  setUnfilter(false);
                  setListOfRestaurants(backUpData);
                }}>
                  {searchText}<span>❌</span>
                </button>
            )}

          </div>
           <button className="filter-btn" onClick={()=>{
                const filterdData = backUpData.filter(
                  (res)=> res?.info?.avgRating > 4.5
                )
                setListOfRestaurants(filterdData);
           }}>
            Top Rated Restuaurant
           </button>
        </div>
        <div className="res-container">
        {
          listOfRestaurants.map((card) => (
            <RestuaurantCard key={card.info.id} resData={card} />
          ))
        }  
        </div>
      </div>
    )
}

export default Body;
